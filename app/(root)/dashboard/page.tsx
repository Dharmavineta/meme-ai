"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Dashboard = () => {
  const [file, setFile] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [res, setRes] = useState("");

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
      let base64Image;
      const mimeType = e.target.files[0].type;

      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = async function () {
        base64Image = reader.result as string;
        // base64Image = base64Image?.replace(/^data:image\/png;base64,/, "");
        try {
          setLoading(true);
          const response = await axios.post("/api/meme", {
            base64Image,
            mimeType,
          });
          if (response.status === 200) {
            setLoading(false);
            setRes(response.data?.kwargs?.content);
          }
        } catch (error) {
          console.log(error);
        }
      };
    }
  };

  const onClose = () => {
    setImage(null);
    setFile(null);
  };

  return (
    <div className="relative">
      <div className="p-5">
        <div className="flex justify-center w-full">
          <input
            ref={inputRef}
            onChange={handleFile}
            type="file"
            accept="image/*"
            className="file:p-2 hidden file:border-none file:bg-sky-100 file:rounded-md"
          />
          <div className="flex flex-col gap-y-5">
            <label
              className="p-3 bg-gradient-to-bl from-purple-400 to-blue-400 text-white cursor-pointer rounded-md"
              onClick={() => inputRef.current && inputRef.current.click()}
            >
              Select a Picture
            </label>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10 flex-col">
          <h1 className="font-bold text-3xl mb-4">Your Picture</h1>
          <div className="relative w-60 h-60">
            {image ? (
              <>
                <Image
                  src={image && image}
                  alt="image"
                  fill
                  className="object-cover"
                />
                <div
                  onClick={onClose}
                  className="absolute right-0 top-0 bg-white cursor-pointer border border-neutral-950 z-50"
                >
                  <X className="w-4 h-4" />
                </div>
              </>
            ) : (
              <div
                onClick={() => inputRef.current?.click()}
                className="flex items-center cursor-pointer cursor-d justify-center w-60 h-60 border rounded-lg"
              >
                <p className="text-center font-semibold flex items-center">
                  <X className="w-4 h-4" />
                  No image selected <X className="w-4 h-4" />
                </p>
              </div>
            )}
          </div>
          {/* <h1 className="mt-5 text-3xl font-bold mb-5 px-10 border-b-2 py-2 border-neutral-900 ">
            The MEME Caption
          </h1> */}
          <div className="text-center mt-20 lg:max-w-2xl h-full flex items-center justify-center">
            {loading ? (
              <p className="text-xl font-bold text-muted-foreground">
                Generating Caption...
              </p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                }}
                className={
                  "text-md leading-7 font-serif w-full px-4 md:px-10 overflow-hidden dark:text-white"
                }
              >
                {res}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
