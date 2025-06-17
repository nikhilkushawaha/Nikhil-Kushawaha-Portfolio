import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({
  rating,
  maxRating = 5,
  size = 24,
  onRatingChange,
  interactive = true
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleClick = (starIndex) => {
    if (interactive && onRatingChange) {
      onRatingChange(starIndex);
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const filled = interactive 
          ? starValue <= (hoverRating || rating)
          : starValue <= rating;

        return (
          <span 
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={cn(
              "cursor-pointer transition-all duration-100",
              interactive && "hover:scale-110"
            )}
          >
            <Star
              size={size}
              fill={filled ? "#F97316" : "transparent"}
              color={filled ? "#F97316" : "#888888"}
              className="mr-1"
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;