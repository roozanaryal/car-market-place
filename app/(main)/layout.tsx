import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto my-32 container">{children}</div>;
};

export default MainLayout;
