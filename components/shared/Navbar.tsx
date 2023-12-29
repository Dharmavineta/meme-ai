"use client";
import UseScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isScrolled = UseScroll();
  return (
    <div
      className={cn(
        "fixed h-16 top-0 left-0 z-50 flex items-center justify-between w-full px-10 backdrop-blur-xl",
        isScrolled && "border-b"
      )}
    >
      <Link href={"/"} className="flex items-center space-x-2">
        <Image src={"/logo.svg"} alt="/" width={25} height={25} />
        <p className="font-bold">WittyPic</p>
      </Link>
      <div className="flex gap-x-5"></div>
    </div>
  );
};

export default Navbar;
