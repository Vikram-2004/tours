"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <div className=" bg-gray-100 h-screen flex justify-center items-center w-screen">
      <div className=" text-black bg-white mx-10 mb-20 px-10 py-10 rounded-lg w-3/4 lg:w-[45vw] md:w-1/2 xl:w-1/4 h-auto shadow-lg">
        <div className="mb-5">
          <h1 className=" font-semibold text-2xl ">Create an account</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="block">
            <Input
              value={name}
              label="Your name"
              onChange={(e: any) => setName(e.target.value)}
              type="text"
              placeholder="joe mama"
            />
          </div>
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
            <Button label="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
