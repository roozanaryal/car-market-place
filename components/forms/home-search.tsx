"use client";

import { useState, useEffect } from "react";
import { Search, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { processImageSearch } from "@/actions/home";
import useFetch from "@/hooks/use-fetch";

export function HomeSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  // Use the useFetch hook for image processing
  const {
    loading: isProcessing,
    fn: processImageFn,
    data: processResult,
    error: processError,
  } = useFetch<{ success: boolean; data?: { make?: string; bodyType?: string; color?: string }; message?: string }, [File]>(processImageSearch);

  // Handle process result and errors with useEffect
  useEffect(() => {
    if (processResult?.success && processResult.data) {
      const params = new URLSearchParams();

      // Add extracted params to the search
      if (processResult.data.make) params.set("make", processResult.data.make);
      if (processResult.data.bodyType)
        params.set("bodyType", processResult.data.bodyType);
      if (processResult.data.color)
        params.set("color", processResult.data.color);

      // Redirect to search results
      router.push(`/cars?${params.toString()}`);
    }
  }, [processResult, router]);

  useEffect(() => {
    if (processError) {
      toast.error(
        "Failed to analyze image: " + (processError.message || "Unknown error")
      );
    }
  }, [processError]);

  // Handle image upload with react-dropzone
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read the image");
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"],
      },
      maxFiles: 1,
    });

  // Handle text search submissions
  const handleTextSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);
  };

  // Handle image search submissions
  const handleImageSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first");
      return;
    }

    // Use the processImageFn from useFetch hook
    await processImageFn(searchImage);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleTextSearch}>
        <div className="search-container flex items-center max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for your dream car..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input flex-1"
          />

          {/* Image Search Button */}
          <div className="absolute right-[100px]">
            <div
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className={`cursor-pointer rounded-full p-3 transition-all duration-300 ${
                isImageSearchActive 
                  ? "bg-accent-gold text-white shadow-lg" 
                  : "bg-white/90 text-neutral-600 hover:bg-accent-gold hover:text-white shadow-md"
              }`}
            >
              <Camera size={20} />
            </div>
          </div>

          <Button 
            type="submit" 
            className="btn-primary absolute right-2 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Search size={18} className="mr-2" />
            Search
          </Button>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-6">
          <form onSubmit={handleImageSearch} className="space-y-4">
            <div className="professional-card p-6 text-center">
              {imagePreview ? (
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={imagePreview}
                    alt="Car preview"
                    className="h-40 object-contain rounded-lg"
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview(null);
                      toast.info("Image removed");
                    }}
                    className="btn-secondary"
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-neutral-100 rounded-full">
                      <Upload className="h-12 w-12 text-primary-dark" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-neutral-900">
                        {isDragActive && !isDragReject
                          ? "Drop your car image here"
                          : "Drag & drop a car image or click to select"}
                      </p>
                      {isDragReject && (
                        <p className="text-red-500">Invalid image type - please use JPG or PNG</p>
                      )}
                      <p className="text-body text-sm">
                        Supports: JPG, PNG (max 5MB)
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && (
              <Button
                type="submit"
                className="btn-primary w-full py-3"
                disabled={isUploading || isProcessing}
              >
                {isUploading
                  ? "Uploading..."
                  : isProcessing
                  ? "Analyzing image..."
                  : "Search with this Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
