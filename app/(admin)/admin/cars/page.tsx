import React from "react";
import CarsList from "./_components/car-list";

export const metadata = {
  title: "Admin | Cars",
  description: "Admin Cars Page",
};

const CarsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cars Management</h1>
      <div className="flex justify-end mb-6">
            <CarsList />
      </div>
    </div>
  );
};

export default CarsPage;
