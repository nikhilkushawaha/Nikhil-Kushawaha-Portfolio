import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarRating from "./StarRating";
import ImageUpload from "./ImageUpload";
import { addReview } from "../lib/reviewService";

const ReviewForm = ({ onReviewSubmitted }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handlePhotoChange = (file) => {
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.rating === 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      await addReview(formData);
      alert("Review submitted successfully!");
      setFormData({ name: "", rating: 0, comment: "", photo: null }); // Reset
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Share Your Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Rating</label>
                <StarRating
                  rating={formData.rating}
                  onRatingChange={handleRatingChange}
                  size={32}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="comment" className="block text-sm font-medium">
                  Your Review
                </label>
                <Textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience..."
                  rows={4}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <label className="block text-sm font-medium text-center mb-4">
                Profile Photo
              </label>
              <ImageUpload onImageSelect={handlePhotoChange} />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-white-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
