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
    <Card className="car-card group cursor-pointer p-0">
      <div className="relative m-0">
        <div className="car-card-image relative block m-0 w-full h-44 md:h-52 overflow-hidden">
          <Image
            src={img}
            alt={`${make} ${model}`}
            fill
            className="object-cover object-top w-full h-full"
          />
          <div className="absolute top-0 left-0 m-3 flex gap-1.5">
            {year >= 2020 && (
              <Badge className="bg-accent-emerald text-white px-2 py-1 text-xs font-medium rounded-full">
                New
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-0 right-0 m-3 h-8 w-8 rounded-full transition-all duration-300 ${
              wishlisted
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-white/80 text-neutral-600 hover:bg-white hover:text-red-600"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist?.(id);
            }}
          >
            <Heart
              className={`h-4 w-4 transition-transform duration-300 ${wishlisted ? "fill-current" : ""}`}
            />
          </Button>
        </div>
      </div>

      <CardContent className="p-3">
        <div className="mb-2">
          <div className="text-base font-semibold text-neutral-900 mb-1">
            {make} {model}
          </div>
          <div className="text-lg font-bold text-primary-dark">
            {formatPrice(price)}
          </div>
        </div>
        <div className="text-xs text-neutral-600 mb-2">
          {year} • {transmission} • {fuelType}
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 border-0 px-1.5 py-0.5 rounded text-xs">
            {bodyType}
          </Badge>
          <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 border-0 px-1.5 py-0.5 rounded text-xs">
            {mileage.toLocaleString()} mi
          </Badge>
        </div>
        <Button className="btn-primary w-full py-1.5 text-xs">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
