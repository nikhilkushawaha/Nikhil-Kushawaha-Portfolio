import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard.jsx";
import { getReviews } from "../lib/reviewService.js";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length === 0 || !containerRef.current) return;

    const scrollContainer = containerRef.current;

    let animationId;

    const animateScroll = () => {
      scrollContainer.scrollLeft += 1;

      // Reset scroll when halfway
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(animateScroll);
    };
    animationId = requestAnimationFrame(animateScroll);

    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };
    const resumeAnimation = () => {
      animationId = requestAnimationFrame(animateScroll);
    };
    scrollContainer.addEventListener("mouseenter", pauseAnimation);
    scrollContainer.addEventListener("mouseleave", resumeAnimation);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseAnimation);
      scrollContainer.removeEventListener("mouseleave", resumeAnimation);
    };
  }, [reviews]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Loading reviews…</h3>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-muted-foreground">No reviews yet</h3>
        <p className="mt-2">Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll space-x-4 no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={`${review._id}-${index}`}
            className="w-full min-w-[300px] max-w-[300px] flex-shrink-0"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
