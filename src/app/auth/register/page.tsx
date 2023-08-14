"use client";

import Footer from "@/components/Footer-auth";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar-auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useState } from "react";
import { toast } from "react-hot-toast";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const registerUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (pass.length >= 6) {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password: pass }),
      });
      console.log(res);
      if (res.ok && res.status === 200) {
        toast.success("User registered successfully.");
        router.push("/auth/login");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Password should exceed 6 characters.");
    }
  };

  return (
    <div className="sm:m-8 bg-white">
      <Navbar />
      <div className=" bg-gray-100 h-auto flex justify-center  w-auto">
        <div className=" text-black bg-white px-16 py-16 rounded-sm sm:w-1/2 w-4/5 lg:w-[30rem] h-auto shadow-lg my-24">
          <div className="mb-8">
            <h1 className=" slideInLeft font-medium monts text-2xl  text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-green-600 ">
              CREATE YOUR ACCOUNT
            </h1>
          </div>
          <form onSubmit={registerUser}>
            <div className="flex flex-col gap-6">
              <div className="block">
                <Input
                  value={name}
                  label="Your name"
                  onChange={(e: any) => setName(e.target.value)}
                  type="text"
                  placeholder="Henry Avery"
                />
              </div>
              <Input
                value={email}
                label="Your email"
                onChange={(e: any) => setEmail(e.target.value)}
                type="email"
                placeholder="avery@email.com"
              />
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
                <Button className=" monts rounded-full text-white hover:shadow-2xl transition duration-150 bg-green-500 px-9 py-1    hover:-translate-y-3 ease-in hover:scale-105 hover:bg-green-600 delay-150">
                  REGISTER
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
