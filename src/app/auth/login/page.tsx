"use client";

import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const loginUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const data = {
      email,
      password: pass,
    };
    await signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
        setPass("");
        setEmail("");
      }
      if (callback?.ok && !callback?.error) {
        toast.success("Logged i successfully.");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    });
  };
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
          <form onSubmit={loginUser}>
            <div className="flex flex-col gap-6">
              <div className="block">
                <Input
                  value={email}
                  label="Your email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  type="email"
                  placeholder="avery@email.com"
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
                  type="submit"
                  className=" rounded-full text-white hover:shadow-2xl  transform duration-150 bg-green-500 px-9 py-1 hover:bg-green-600"
                >
                  SIGN IN
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
