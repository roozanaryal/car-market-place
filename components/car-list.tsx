"use client";

import { useState } from "react";
import CarCard, { Car } from "@/components/car-card";
import { featuredCars as initialData } from "@/lib/data";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>(initialData as Car[]);

  const toggleWishlist = (id: number) => {
    setCars((prev) =>
      prev.map((c) => (c.id === id ? { ...c, wishlisted: !c.wishlisted } : c))
    );
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onToggleWishlist={toggleWishlist} />
      ))}
    </div>
  );
}
