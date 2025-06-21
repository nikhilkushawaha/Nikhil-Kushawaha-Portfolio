// reviewApi.js
export const fetchReviews = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reviews`);
  if (!res.ok) {
    throw new Error("Error fetching reviews");
  }
  return await res.json();
};

export const submitReview = async (reviewData) => {
  const formData = new FormData();
  formData.append("name", reviewData.name);
  formData.append("rating", reviewData.rating);
  formData.append("comment", reviewData.comment);
  if (reviewData.photo) {
    formData.append("photo", reviewData.photo);
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reviews`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const errorData = await res.json();
    console.error(errorData);
    throw new Error(errorData.message || "Error submitting review");
  }

  return await res.json();
};
