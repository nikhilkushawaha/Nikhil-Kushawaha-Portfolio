import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "./StarRating";
import { format } from "date-fns";
import { User } from "lucide-react";

import Counter from "./Counter";

const ReviewCard = ({ review }) => {
  // Get the first letter of the name for fallback avatar
  const nameInitial = review.name.charAt(0).toUpperCase();
  
  // Format date as "Month Day, Year"
  const formattedDate = format(new Date(review.createdAt), "MMMM d, yyyy");

  const imageUrl = review.photoUrl
    ? `${import.meta.env.VITE_API_URL}${review.photoUrl}`
    : "";

  return (
    <Card className="h-full bg-white-800 backdrop-blur-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
       <Avatar className="h-12 w-12">
          {imageUrl ? (
            <AvatarImage src={imageUrl} alt={review.name} />
          ) : (
            <AvatarFallback className="bg-white-600">
              {nameInitial}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center">
            <StarRating rating={review.rating} interactive={false} size={16} />
            <span className="text-sm text-muted-foreground ml-2">
              {formattedDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {review.comment || "No comment provided."}
        </p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;