import React, { useEffect, useRef } from "react";
import ReviewCard from "./ReviewCard.jsx";

const ReviewList = ({ reviews }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (reviews.length === 0 || !containerRef.current) return;
    
    const scrollContainer = containerRef.current;
    let animationId;
    
    // Function to create the scrolling animation
    const animateScroll = () => {
      scrollContainer.scrollLeft += 1; // Move 1px at a time
      
      // Reset when we reach the end of the original set
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
        scrollContainer.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(animateScroll);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animateScroll);
    
    // Pause animation when user hovers
    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };
    
    // Resume animation when user stops hovering
    const resumeAnimation = () => {
      animationId = requestAnimationFrame(animateScroll);
    };
    
    scrollContainer.addEventListener('mouseenter', pauseAnimation);
    scrollContainer.addEventListener('mouseleave', resumeAnimation);
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', pauseAnimation);
      scrollContainer.removeEventListener('mouseleave', resumeAnimation);
    };
  }, [reviews]);
  
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-muted-foreground">No reviews yet</h3>
        <p className="mt-2">Be the first to share your experience!</p>
      </div>
    );
  }

  // Duplicate reviews to create a continuous loop effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div 
        ref={containerRef}
        className="flex overflow-hidden gap-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {duplicatedReviews.map((review, index) => (
          <div 
            key={`${review._id}-${index}`} 
            className="w-full min-w-[300px] max-w-[33%] flex-shrink-0"
            style={{ flex: '0 0 calc(33.33% - 16px)' }}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;