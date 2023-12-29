import React, { FC } from "react";
import { LucideIcon } from "lucide-react";

type props = {
  text: string;
  icon: LucideIcon;
};

const Heading: FC<props> = ({ icon: Icon, text }) => {
  return (
    <div className="flex gap-x-2 items-center p-10">
      <div className="bg-rose-100 p-2 rounded-full">
        <Icon size={25} />
      </div>
      <p className="text-2xl font-bold">{text}</p>
    </div>
  );
};

export default Heading;
