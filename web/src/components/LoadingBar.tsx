"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoadingBar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50">
      <div 
        className="h-full bg-blue-400 transition-all duration-300 ease-out"
        style={{
          width: '100%',
          animation: 'loading-progress 1s ease-in-out'
        }}
      />
      <style jsx>{`
        @keyframes loading-progress {
          0% {
            width: 0%;
            opacity: 1;
          }
          50% {
            width: 70%;
            opacity: 0.8;
          }
          100% {
            width: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 