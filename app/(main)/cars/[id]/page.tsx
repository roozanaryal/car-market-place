import React from "react";

const CarPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>CarPage:{id}</div>;
};

export default CarPage;
