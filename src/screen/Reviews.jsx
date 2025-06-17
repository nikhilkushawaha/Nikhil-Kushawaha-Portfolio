import React from "react";
import { fetchReviews, submitReview } from "@/lib/api/reviewApi.js";
import ReviewForm from "@/components/ReviewForm.jsx";
import ReviewList from "@/components/ReviewList.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

const Reviews = () => {
  const queryClient = useQueryClient();
  
  // Fetch reviews with React Query
  const { data: reviews = [], isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });
  
  // Handle review submission
  const mutation = useMutation({
    mutationFn: submitReview,
    onSuccess: () => {
      toast({
        title: "Thank you for your review!",
        description: "Your feedback has been submitted successfully.",
      });
      // Invalidate the reviews query to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: (error) => {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive"
      });
    }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center text-white-600 mb-12">
        <h1 className="head-text">Client Reviews</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          What people are saying about my work. I value all feedback and use it to continuously improve.
        </p>
      </div>
      
      {isLoading ? (
        <div className="text-center py-8">Loading reviews...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">
          Error loading reviews. Please try again later.
        </div>
      ) : (
        <Tabs defaultValue="reviews" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="reviews">View Reviews ({reviews.length})</TabsTrigger>
            <TabsTrigger value="leave-review">Leave a Review</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reviews" className="mt-6">
            <ReviewList reviews={reviews} />
          </TabsContent>
          
          <TabsContent value="leave-review">
            <div className="max-w-3xl mx-auto">
              <ReviewForm onReviewSubmitted={(formData) => mutation.mutate(formData)} />
            </div>
          </TabsContent>
        </Tabs>
      )}
      
      <Separator className="my-12" />
      
      <div className="text-center">
        <p className="text-muted-foreground">
          Thank you for taking the time to share your experience.
          Your feedback helps me improve and better serve future clients.
        </p>
      </div>
    </div>
  );
};

export default Reviews;