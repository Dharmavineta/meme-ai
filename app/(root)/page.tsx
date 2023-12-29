import React from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Pricing from "./_components/Pricing";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
