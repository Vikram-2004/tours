"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <div className=" bg-gray-100 h-screen flex justify-center items-center w-screen">
      <div className=" text-black bg-white mx-14 mb-20 px-10 py-10 rounded-lg w-[70vw] lg:w-[45vw] md:w-[50vw] xl:w-[25vw] h-auto shadow-lg">
        <div className="mb-5">
          <h1 className=" font-semibold text-2xl ">Sign in to your account</h1>
        </div>
        <div className="flex flex-col gap-4">
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
            <Button label="sign in" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
