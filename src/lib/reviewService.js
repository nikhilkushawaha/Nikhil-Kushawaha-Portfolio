const LOCAL_STORAGE_KEY = "portfolio-reviews";

// Generate a simple unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Get all reviews from local storage
export const getReviews = () => {
  const storedReviews = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!storedReviews) return [];
  
  try {
    const parsedReviews = JSON.parse(storedReviews);
    return parsedReviews.map((review) => ({
      ...review,
      createdAt: new Date(review.createdAt)
    }));
  } catch (error) {
    console.error("Error parsing reviews:", error);
    return [];
  }
};

// Add a new review
export const addReview = async (reviewData) => {
  // In a real app, this would upload the image to a server or cloud storage
  // For now, we'll convert the image to a data URL for demo purposes
  let photoUrl = "";
  
  if (reviewData.photo) {
    photoUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result);
      reader.readAsDataURL(reviewData.photo);
    });
  }
  
  const newReview = {
    _id: generateId(),
    name: reviewData.name,
    rating: reviewData.rating,
    comment: reviewData.comment,
    photoUrl,
    createdAt: new Date()
  };
  
  const existingReviews = getReviews();
  const updatedReviews = [newReview, ...existingReviews];
  
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReviews));
  
  return newReview;
};
