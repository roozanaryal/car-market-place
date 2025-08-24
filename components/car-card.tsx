"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  transmission: string;
  fuelType: string;
  bodyType: string;
  mileage: number;
  color: string;
  wishlisted: boolean;
};

function formatPrice(n: number) {
  return `$${n.toLocaleString()}`;
}

export default function CarCard({
  car,
  onToggleWishlist,
  className = "",
}: {
  car: Car;
  onToggleWishlist?: (id: number) => void;
  className?: string;
}) {
  const {
    id,
    make,
    model,
    price,
    year,
    transmission,
    fuelType,
    bodyType,
    mileage,
    color,
    images,
    wishlisted,
  } = car;
  const img = images?.[0] ?? "/placeholder.svg";

  return (
    <Card className={`group overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md ${className}`}>
      <div className="relative">
        <div className="bg-white">
          <div className="relative h-44 w-full">
            <Image
              src={img}
              alt={`${make} ${model}`}
              fill
              priority={false}
              className="object-contain"
              sizes="(min-width: 1024px) 350px, (min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>

        <button
          type="button"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => onToggleWishlist?.(id)}
          className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border bg-background/70 p-2 backdrop-blur hover:bg-background"
        >
          <Heart
            className={`h-5 w-5 ${wishlisted ? "fill-current text-red-500" : "text-muted-foreground group-hover:text-foreground"}`}
          />
        </button>
      </div>

      <CardContent className="space-y-2 py-4">
        <div className="text-[15px] font-semibold leading-tight">
          {make} {model}
        </div>
        <div className="text-[15px] font-semibold text-blue-600">
          {formatPrice(price)}
        </div>
        <div className="text-sm text-muted-foreground">
          {year} • {transmission} • {fuelType}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="outline">{bodyType}</Badge>
          <Badge variant="outline">{mileage.toLocaleString()} miles</Badge>
          <Badge variant="outline">{color}</Badge>
        </div>
      </CardContent>

      <CardFooter className="pb-5 pt-0">
        <Button className="w-full" variant="outline">
          View Car
        </Button>
      </CardFooter>
    </Card>
  );
}