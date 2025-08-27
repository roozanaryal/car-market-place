import type { Car } from "@prisma/client";

export type SerializedCar = Omit<Car, "price" | "createdAt" | "updatedAt"> & {
  price: number;
  createdAt: string;
  updatedAt: string;
};

// Convert Prisma Car (with Decimal/Date types) into a JSON-safe object for the client
export function serializeCarData(car: Car): SerializedCar {
  return {
    ...car,
    price: typeof (car as any).price === "object" && (car as any).price !== null
      ? Number((car as any).price)
      : Number(car.price as unknown as number),
    createdAt: car.createdAt.toISOString(),
    updatedAt: car.updatedAt.toISOString(),
  };
}
