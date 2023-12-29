import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default layout;
