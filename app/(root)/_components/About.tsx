import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" w-full px-10">
      <div className="flex flex-col lg:flex-row justify-between w-full items-center ">
        <div className="flex-1 flex flex-col gap-y-5 w-full px-5">
          <div className="flex gap-x-5 justify-evenly w-full">
            <Image
              src={"/meme-face.png"}
              height={150}
              width={150}
              alt="logo"
              className="object-cover"
            />
            <Image
              src={"/pic1.png"}
              height={150}
              width={150}
              alt="logo"
              className="object-cover"
            />
          </div>
          <div className="flex gap-x-5 justify-between">
            <Image
              src={"/pic2.png"}
              height={250}
              width={250}
              alt="logo"
              className="object-cover"
            />
            <Image
              src={"/pic3.png"}
              height={150}
              width={150}
              alt="logo"
              className="object-cover"
            />
          </div>
          <div className="flex gap-x-5"></div>
        </div>
        <div className="flex-1 flex flex-col items-center  ">
          <h1 className="text-4xl lg:text-5xl font-bold mt-20 lg:mt-0 text-center ">
            Pic a Meme, Any Meme!
          </h1>
          <p className="text-muted-foreground font-semibold text-center mt-5 max-w-xl lg:max-w-lg">
            Snap a pic, and watch the magic happen! Our AI spins out captions
            that transform your images into meme gold. Ready to turn the
            ordinary into extraordinary? Let’s get the meme party started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
