import React, { useEffect, useState } from "react";

const UseScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else setIsScroll(false);
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return isScroll;
};

export default UseScroll;
