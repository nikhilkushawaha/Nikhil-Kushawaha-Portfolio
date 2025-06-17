import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ImageUpload = ({ onImageSelect, className }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      onImageSelect(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      onImageSelect(null);
      setPreview(null);
    }
  };

  const handleClearImage = () => {
    setPreview(null);
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        id="image-upload"
      />
      
      {preview ? (
        <div className="relative">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-24 h-24 object-cover rounded-full border-2 border-primary"
          />
          <button
            onClick={handleClearImage}
            className="absolute top-0 right-0 bg-destructive text-white rounded-full p-1"
            type="button"
          >
            <XIcon size={14} />
          </button>
        </div>
      ) : (
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center bg-muted border-2 border-dashed border-muted-foreground"
        >
          <ImageIcon size={32} className="text-muted-foreground" />
        </div>
      )}
      
      <label htmlFor="image-upload" className="mt-2">
        <Button 
          type="button" 
          variant="outline" 
          className="cursor-pointer"
          size="sm"
        >
          <UploadIcon size={16} className="mr-2" />
          {preview ? "Change Photo" : "Upload Photo"}
        </Button>
      </label>
    </div>
  );
};

export default ImageUpload;
