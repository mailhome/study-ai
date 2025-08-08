// components/StarRating.tsx
import { FC } from "react";

interface StarRatingProps {
  rating: number; // e.g. 4.5
}

export default function StarRating ({ rating }: StarRatingProps)  {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => {
        const isFullStar = index + 1 <= Math.floor(rating);
        const isHalfStar = !isFullStar && index + 0.5 <= rating;

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFullStar ? "gold" : isHalfStar ? "url(#half)" : "none"}
            stroke="gold"
            className="w-6 h-6"
          >
            {isHalfStar && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="gold" />
                  <stop offset="50%" stopColor="white" />
                </linearGradient>
              </defs>
            )}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.974a1 
                 1 0 00.95.69h5.232c.969 0 1.371 1.24.588 
                 1.81l-4.23 3.073a1 1 0 00-.364 1.118l1.618 
                 4.974c.3.921-.755 1.688-1.54 
                 1.118l-4.23-3.073a1 1 0 00-1.175 
                 0l-4.23 3.073c-.785.57-1.84-.197-1.54-1.118l1.618-4.974a1 
                 1 0 00-.364-1.118L2.11 10.4c-.783-.57-.38-1.81.588-1.81h5.232a1 
                 1 0 00.95-.69l1.618-4.974z"
            />
          </svg>
        );
      })}
    </div>
  );
};


