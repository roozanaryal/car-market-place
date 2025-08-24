import { featuredCars as mockFeaturedCars } from "@/lib/data";

// Mock implementation of processImageSearch without actual API calls
export async function processImageSearch(file: File): Promise<{ success: boolean; data?: any; message?: string }> {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock analysis - in a real app this would use AI/ML
  const mockResults = [
    { make: "Toyota", bodyType: "Sedan", color: "White" },
    { make: "Honda", bodyType: "SUV", color: "Blue" },
    { make: "Ford", bodyType: "Truck", color: "Black" },
    { make: "BMW", bodyType: "Sedan", color: "Red" },
    { make: "Tesla", bodyType: "Sedan", color: "White" },
  ];
  
  // Randomly select a mock result
  const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
  
  // Simulate occasional errors
  if (Math.random() < 0.1) { // 10% chance of error
    throw new Error("Failed to analyze image. Please try another image.");
  }
  
  return {
    success: true,
    data: randomResult
  };
}

// Mock implementation of getFeaturedCars without actual API calls
export async function getFeaturedCars(): Promise<any[]> {
  // Simulate a small delay to mimic API call
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return the featured cars from lib/data.ts
  return mockFeaturedCars;
}
