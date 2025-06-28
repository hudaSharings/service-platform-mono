using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using ServicePlatform.Infrastructure.Repositories;

namespace ServicePlatform.Infrastructure.Services;

public class RatingService : IRatingService
{
    private readonly IGenericRepository<Rating> _ratingRepository;
    private readonly IGenericRepository<Contract> _contractRepository;
    private readonly IGenericRepository<User> _userRepository;
    private readonly IMapper _mapper;
    private readonly ApplicationDbContext _context;

    public RatingService(
        IGenericRepository<Rating> ratingRepository,
        IGenericRepository<Contract> contractRepository,
        IGenericRepository<User> userRepository,
        IMapper mapper,
        ApplicationDbContext context)
    {
        _ratingRepository = ratingRepository;
        _contractRepository = contractRepository;
        _userRepository = userRepository;
        _mapper = mapper;
        _context = context;
    }

    public async Task<ServiceResponse<List<RatingDto>>> GetRatingsByContractAsync(Guid contractId)
    {
        try
        {
            var ratings = await _context.Ratings
                .Include(r => r.Rater)
                .Where(r => r.ContractId == contractId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync();

            var ratingDtos = _mapper.Map<List<RatingDto>>(ratings);
            return ServiceResponse<List<RatingDto>>.SuccessResult(ratingDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<RatingDto>>.FailureResult($"Error retrieving ratings: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<RatingDto>>> GetRatingsByUserAsync(Guid userId, int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Ratings
                .Include(r => r.Rater)
                .Where(r => r.RatedUserId == userId)
                .OrderByDescending(r => r.CreatedAt);

            var totalCount = await query.CountAsync();
            var ratings = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var ratingDtos = _mapper.Map<List<RatingDto>>(ratings);
            return ServiceResponse<List<RatingDto>>.SuccessResult(ratingDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<RatingDto>>.FailureResult($"Error retrieving user ratings: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<RatingDto>> GetRatingByIdAsync(Guid ratingId)
    {
        try
        {
            var rating = await _ratingRepository.GetByIdAsync(ratingId);
            if (rating == null)
                return ServiceResponse<RatingDto>.FailureResult("Rating not found");

            var ratingDto = _mapper.Map<RatingDto>(rating);
            return ServiceResponse<RatingDto>.SuccessResult(ratingDto);
        }
        catch (Exception ex)
        {
            return ServiceResponse<RatingDto>.FailureResult($"Error retrieving rating: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<RatingDto>> CreateRatingAsync(Guid contractId, Guid raterId, CreateRatingRequest request)
    {
        try
        {
            var contract = await _contractRepository.GetByIdAsync(contractId);
            if (contract == null)
                return ServiceResponse<RatingDto>.FailureResult("Contract not found");

            var rating = new Rating
            {
                ContractId = contractId,
                RaterId = raterId,
                RatedUserId = contract.ProviderId == raterId ? contract.RequesterId : contract.ProviderId,
                RatingValue = request.RatingValue,
                Comment = request.Comment,
                IsAnonymous = request.IsAnonymous,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _ratingRepository.AddAsync(rating);

            // Update average rating for the rated user
            await UpdateUserAverageRating(rating.RatedUserId);

            var ratingDto = _mapper.Map<RatingDto>(rating);
            return ServiceResponse<RatingDto>.SuccessResult(ratingDto, "Rating created successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<RatingDto>.FailureResult($"Error creating rating: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<RatingDto>> UpdateRatingAsync(Guid ratingId, Guid raterId, UpdateRatingRequest request)
    {
        try
        {
            var rating = await _ratingRepository.GetByIdAsync(ratingId);
            if (rating == null)
                return ServiceResponse<RatingDto>.FailureResult("Rating not found");

            if (rating.RaterId != raterId)
                return ServiceResponse<RatingDto>.FailureResult("Unauthorized to update this rating");

            rating.RatingValue = request.RatingValue;
            rating.Comment = request.Comment;
            rating.UpdatedAt = DateTime.UtcNow;

            await _ratingRepository.UpdateAsync(rating);

            // Update average rating for the rated user
            await UpdateUserAverageRating(rating.RatedUserId);

            var ratingDto = _mapper.Map<RatingDto>(rating);
            return ServiceResponse<RatingDto>.SuccessResult(ratingDto, "Rating updated successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<RatingDto>.FailureResult($"Error updating rating: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<bool>> DeleteRatingAsync(Guid ratingId, Guid raterId)
    {
        try
        {
            var rating = await _ratingRepository.GetByIdAsync(ratingId);
            if (rating == null)
                return ServiceResponse<bool>.FailureResult("Rating not found");

            if (rating.RaterId != raterId)
                return ServiceResponse<bool>.FailureResult("Unauthorized to delete this rating");

            var ratedUserId = rating.RatedUserId;
            await _ratingRepository.DeleteAsync(rating);

            // Update average rating for the rated user
            await UpdateUserAverageRating(ratedUserId);

            return ServiceResponse<bool>.SuccessResult(true, "Rating deleted successfully");
        }
        catch (Exception ex)
        {
            return ServiceResponse<bool>.FailureResult($"Error deleting rating: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<decimal>> GetAverageRatingAsync(Guid userId)
    {
        try
        {
            var averageRatingDouble = await _context.Ratings
                .Where(r => r.RatedUserId == userId)
                .AverageAsync(r => r.RatingValue);

            var averageRating = (decimal)averageRatingDouble;
            return ServiceResponse<decimal>.SuccessResult(averageRating);
        }
        catch (Exception ex)
        {
            return ServiceResponse<decimal>.FailureResult($"Error calculating average rating: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<int>> GetRatingCountAsync(Guid userId)
    {
        try
        {
            var count = await _context.Ratings
                .Where(r => r.RatedUserId == userId)
                .CountAsync();

            return ServiceResponse<int>.SuccessResult(count);
        }
        catch (Exception ex)
        {
            return ServiceResponse<int>.FailureResult($"Error getting rating count: {ex.Message}");
        }
    }

    public async Task<ServiceResponse<List<RatingDto>>> GetRecentRatingsAsync(int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Ratings
                .Include(r => r.Rater)
                .OrderByDescending(r => r.CreatedAt);

            var totalCount = await query.CountAsync();
            var ratings = await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var ratingDtos = _mapper.Map<List<RatingDto>>(ratings);
            return ServiceResponse<List<RatingDto>>.SuccessResult(ratingDtos);
        }
        catch (Exception ex)
        {
            return ServiceResponse<List<RatingDto>>.FailureResult($"Error retrieving recent ratings: {ex.Message}");
        }
    }

    private async Task UpdateUserAverageRating(Guid userId)
    {
        try
        {
            var averageRating = await _context.Ratings
                .Where(r => r.RatedUserId == userId)
                .AverageAsync(r => r.RatingValue);

            var user = await _userRepository.GetByIdAsync(userId);
            if (user != null)
            {
                // Update the user's average rating (you might need to add this property to User entity)
                // user.AverageRating = averageRating;
                await _userRepository.UpdateAsync(user);
            }
        }
        catch
        {
            // Ignore errors in average calculation
        }
    }
} 