import { getReviews, addReview } from '../reviewService.js';

// Get all reviews
export const fetchReviews = async () => {
  try {
    const reviews = getReviews();
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

// Add a new review
export const submitReview = async (reviewData) => {
  try {
    const newReview = await addReview(reviewData);
    return newReview;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};