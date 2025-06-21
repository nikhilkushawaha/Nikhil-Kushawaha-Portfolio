// src/lib/reviewService.js
export const getReviews = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/reviews`);
  if (!response.ok) {
    throw new Error("Error fetching reviews");
  }
  return await response.json();
};

export const addReview = async (reviewData) => {
  const formData = new FormData();
  formData.append("name", reviewData.name);
  formData.append("rating", reviewData.rating);
  formData.append("comment", reviewData.comment);
  if (reviewData.photo) {
    formData.append("photo", reviewData.photo);
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/reviews`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Error submitting review");
  }
  return await response.json();
};
