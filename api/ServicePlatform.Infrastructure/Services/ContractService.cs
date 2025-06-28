using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ServicePlatform.Application.DTOs;
using ServicePlatform.Application.Interfaces;
using ServicePlatform.Domain.Entities;
using ServicePlatform.Infrastructure.Data;
using ServicePlatform.Infrastructure.Repositories;

namespace ServicePlatform.Infrastructure.Services;

public class ContractService : IContractService
{
    private readonly ApplicationDbContext _context;
    private readonly IGenericRepository<Contract> _contractRepository;
    private readonly IMapper _mapper;

    public ContractService(
        ApplicationDbContext context,
        IGenericRepository<Contract> contractRepository,
        IMapper mapper)
    {
        _context = context;
        _contractRepository = contractRepository;
        _mapper = mapper;
    }

    public async Task<ServiceResponse<ContractDto>> GetContractByIdAsync(Guid contractId)
    {
        try
        {
            var contract = await _context.Contracts
                .Include(c => c.Provider)
                .Include(c => c.Requester)
                .Include(c => c.Service)
                .FirstOrDefaultAsync(c => c.Id == contractId);

            if (contract == null)
            {
                return new ServiceResponse<ContractDto>
                {
                    Success = false,
                    Message = "Contract not found"
                };
            }

            var contractDto = _mapper.Map<ContractDto>(contract);
            return new ServiceResponse<ContractDto>
            {
                Success = true,
                Data = contractDto
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<ContractDto>
            {
                Success = false,
                Message = $"Error retrieving contract: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<ContractSearchResponse>> GetUserContractsAsync(Guid userId, ContractSearchRequest request)
    {
        try
        {
            var query = _context.Contracts
                .Include(c => c.Provider)
                .Include(c => c.Requester)
                .Include(c => c.Service)
                .Where(c => c.ProviderId == userId || c.RequesterId == userId);

            if (!string.IsNullOrEmpty(request.Status))
            {
                query = query.Where(c => c.Status == request.Status);
            }

            if (!string.IsNullOrEmpty(request.ContractType))
            {
                query = query.Where(c => c.ContractType == request.ContractType);
            }

            var totalCount = await query.CountAsync();
            var contracts = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync();

            var contractDtos = _mapper.Map<List<ContractDto>>(contracts);

            var response = new ContractSearchResponse
            {
                Contracts = contractDtos,
                TotalCount = totalCount,
                Page = request.Page,
                PageSize = request.PageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / request.PageSize)
            };

            return new ServiceResponse<ContractSearchResponse>
            {
                Success = true,
                Data = response
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<ContractSearchResponse>
            {
                Success = false,
                Message = $"Error retrieving user contracts: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<ContractDto>> CreateContractAsync(Guid requesterId, CreateContractRequest request)
    {
        try
        {
            var contract = new Contract
            {
                Id = Guid.NewGuid(),
                ContractNumber = GenerateContractNumber(),
                RequesterId = requesterId,
                ProviderId = request.ProviderId,
                ServiceId = request.ServiceId,
                ContractType = request.ContractType,
                StartDate = request.StartDate ?? DateTime.UtcNow,
                EndDate = request.EndDate,
                TotalAmount = request.TotalAmount,
                Status = "Pending",
                CreatedAt = DateTime.UtcNow
            };

            var result = await _contractRepository.AddAsync(contract);
            var contractDto = _mapper.Map<ContractDto>(result);

            return new ServiceResponse<ContractDto>
            {
                Success = true,
                Data = contractDto,
                Message = "Contract created successfully"
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<ContractDto>
            {
                Success = false,
                Message = $"Error creating contract: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<ContractDto>> UpdateContractStatusAsync(Guid contractId, Guid userId, UpdateContractStatusRequest request)
    {
        try
        {
            var contract = await _contractRepository.GetByIdAsync(contractId);
            if (contract == null)
            {
                return new ServiceResponse<ContractDto>
                {
                    Success = false,
                    Message = "Contract not found"
                };
            }

            // Verify user has permission to update this contract
            if (contract.ProviderId != userId && contract.RequesterId != userId)
            {
                return new ServiceResponse<ContractDto>
                {
                    Success = false,
                    Message = "Unauthorized to update this contract"
                };
            }

            contract.Status = request.Status;
            contract.UpdatedAt = DateTime.UtcNow;

            if (request.Status == "Active" && contract.StartDate == default)
            {
                contract.StartDate = DateTime.UtcNow;
            }

            var result = await _contractRepository.UpdateAsync(contract);
            var contractDto = _mapper.Map<ContractDto>(result);

            return new ServiceResponse<ContractDto>
            {
                Success = true,
                Data = contractDto,
                Message = "Contract status updated successfully"
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<ContractDto>
            {
                Success = false,
                Message = $"Error updating contract status: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<bool>> CancelContractAsync(Guid contractId, Guid userId, string cancellationReason)
    {
        try
        {
            var contract = await _contractRepository.GetByIdAsync(contractId);
            if (contract == null)
            {
                return new ServiceResponse<bool>
                {
                    Success = false,
                    Message = "Contract not found"
                };
            }

            // Verify user has permission to cancel this contract
            if (contract.ProviderId != userId && contract.RequesterId != userId)
            {
                return new ServiceResponse<bool>
                {
                    Success = false,
                    Message = "Unauthorized to cancel this contract"
                };
            }

            contract.Status = "Cancelled";
            contract.CancellationReason = cancellationReason;
            contract.UpdatedAt = DateTime.UtcNow;

            await _contractRepository.UpdateAsync(contract);

            return new ServiceResponse<bool>
            {
                Success = true,
                Data = true,
                Message = "Contract cancelled successfully"
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<bool>
            {
                Success = false,
                Message = $"Error cancelling contract: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<bool>> CompleteContractAsync(Guid contractId, Guid userId)
    {
        try
        {
            var contract = await _contractRepository.GetByIdAsync(contractId);
            if (contract == null)
            {
                return new ServiceResponse<bool>
                {
                    Success = false,
                    Message = "Contract not found"
                };
            }

            // Verify user has permission to complete this contract
            if (contract.ProviderId != userId && contract.RequesterId != userId)
            {
                return new ServiceResponse<bool>
                {
                    Success = false,
                    Message = "Unauthorized to complete this contract"
                };
            }

            contract.Status = "Completed";
            contract.EndDate = DateTime.UtcNow;
            contract.UpdatedAt = DateTime.UtcNow;

            await _contractRepository.UpdateAsync(contract);

            return new ServiceResponse<bool>
            {
                Success = true,
                Data = true,
                Message = "Contract completed successfully"
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<bool>
            {
                Success = false,
                Message = $"Error completing contract: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<List<ContractDto>>> GetContractsByServiceAsync(Guid serviceId, int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Contracts
                .Include(c => c.Provider)
                .Include(c => c.Requester)
                .Include(c => c.Service)
                .Where(c => c.ServiceId == serviceId);

            var contracts = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var contractDtos = _mapper.Map<List<ContractDto>>(contracts);

            return new ServiceResponse<List<ContractDto>>
            {
                Success = true,
                Data = contractDtos
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<List<ContractDto>>
            {
                Success = false,
                Message = $"Error retrieving contracts by service: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<List<ContractDto>>> GetActiveContractsAsync(int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Contracts
                .Include(c => c.Provider)
                .Include(c => c.Requester)
                .Include(c => c.Service)
                .Where(c => c.Status == "Active");

            var contracts = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var contractDtos = _mapper.Map<List<ContractDto>>(contracts);

            return new ServiceResponse<List<ContractDto>>
            {
                Success = true,
                Data = contractDtos
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<List<ContractDto>>
            {
                Success = false,
                Message = $"Error retrieving active contracts: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<int>> GetContractCountAsync(string? status = null)
    {
        try
        {
            var query = _context.Contracts.AsQueryable();

            if (!string.IsNullOrEmpty(status))
            {
                query = query.Where(c => c.Status == status);
            }

            var count = await query.CountAsync();

            return new ServiceResponse<int>
            {
                Success = true,
                Data = count
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<int>
            {
                Success = false,
                Message = $"Error getting contract count: {ex.Message}"
            };
        }
    }

    public async Task<ServiceResponse<PaginatedResponseDto<ContractDto>>> GetContractsAsync(string? search = null, string? status = null, string? contractType = null, int page = 1, int pageSize = 10)
    {
        try
        {
            var query = _context.Contracts
                .Include(c => c.Provider)
                .Include(c => c.Requester)
                .Include(c => c.Service)
                .AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(c => 
                    c.ContractNumber.Contains(search) ||
                    c.Provider.FirstName.Contains(search) ||
                    c.Provider.LastName.Contains(search) ||
                    c.Requester.FirstName.Contains(search) ||
                    c.Requester.LastName.Contains(search) ||
                    c.Service.Title.Contains(search));
            }

            if (!string.IsNullOrEmpty(status))
            {
                query = query.Where(c => c.Status == status);
            }

            if (!string.IsNullOrEmpty(contractType))
            {
                query = query.Where(c => c.ContractType == contractType);
            }

            var totalCount = await query.CountAsync();
            var contracts = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var contractDtos = _mapper.Map<List<ContractDto>>(contracts);

            var result = new PaginatedResponseDto<ContractDto>
            {
                Data = contractDtos,
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
            };

            return new ServiceResponse<PaginatedResponseDto<ContractDto>>
            {
                Success = true,
                Data = result,
                Message = "Contracts retrieved successfully"
            };
        }
        catch (Exception ex)
        {
            return new ServiceResponse<PaginatedResponseDto<ContractDto>>
            {
                Success = false,
                Message = $"Error retrieving contracts: {ex.Message}"
            };
        }
    }

    private string GenerateContractNumber()
    {
        return $"CTR-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString().Substring(0, 8).ToUpper()}";
    }
} 