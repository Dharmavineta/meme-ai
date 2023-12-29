import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="px-10 xl:px-48 mx-auto w-full h-[100vh] flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex-1 flex flex-col items-center justify-center lg:items-start gap-y-4">
          <h1 className="text-4xl lg:text-5xl text-center font-bold lg:text-left ">
            Meme Your way to stardom!
          </h1>
          <p className=" font-semibold max-w-lg text-center lg:text-left ">
            Got a pic? Give it a tickle! Unleash the power of giggles with our
            AI, turning the mundane into meme-tastic. Ready to spread laughter?
            Let’s meme this moment!
          </p>
          <Button className="w-full sm:w-fit" asChild>
            <Link href={"/dashboard"}>Start Memeing</Link>
          </Button>
        </div>
        <div className="flex-1 hidden lg:flex lg:justify-end">
          <div className="w-96 h-96 relative">
            <Image src={"/meme-face.png"} alt="/" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
