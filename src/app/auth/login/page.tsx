"use client";

import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <div className="sm:m-8 bg-white">
      <Navbar />
      <div className=" bg-gray-200 h-auto flex justify-center w-auto">
        <div className=" text-black bg-white px-16 py-16 rounded-sm sm:w-1/2 w-4/5 lg:w-[30rem] h-auto shadow-lg my-32">
          <div className="mb-8">
            <h1 className=" font-semibold text-2xl  text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-green-600 ">
              LOG INTO YOUR ACCOUNT
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="block">
              <Input
                value={email}
                label="Your email"
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="block pb-2">
              <Input
                value={pass}
                label="Password"
                onChange={(e: any) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="block ">
              <Button
                variant="link"
                className=" rounded-full text-white hover:shadow-2xl  transform duration-150 bg-green-500 px-9 py-1 hover:bg-green-600"
              >
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
