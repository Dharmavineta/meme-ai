import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Heading from "./Heading";
import { Check, PiggyBank, Sparkle, Sparkles, X } from "lucide-react";

const Pricing = () => {
  return (
    <div className="py-44 w-full">
      <Heading text="Our Pricing" icon={PiggyBank} />
      <div className="grid lg:grid-cols-2 gap-10 px-10 place-items-center">
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2">
                <Sparkle />
              </span>
              Free Tier
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between">
                <h1 className="font-bold">Unlimited Free Generations</h1>
                <div className="bg-rose-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <X className="w-4 h-4" />
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between ">
                <h1 className="font-bold">Priority During Peak hours</h1>
                <div className="bg-rose-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <X className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between ">
                <h1 className="font-bold">Multiple Uploads</h1>
                <div className="bg-rose-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <X className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between ">
                <h1 className="font-bold">Chat against your pictures</h1>
                <div className="bg-rose-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <X className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2 text-orange-500">
                <Sparkles />
              </span>
              Premium Tier
              <span className="ml-auto">10$ / month</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between ">
                <h1 className="font-bold">Unlimited Free Generations</h1>
                <div className="bg-sky-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between ">
                <h1 className="font-bold">Priority During Peak hours</h1>
                <div className="bg-sky-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between">
                <h1 className="font-bold">Multiple Uploads</h1>
                <div className="bg-sky-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex w-full justify-between">
                <h1 className="font-bold">Chat against your pictures</h1>
                <div className="bg-sky-500 rounded-full p-2 text-white">
                  <span className="font-bold">
                    <Check className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
