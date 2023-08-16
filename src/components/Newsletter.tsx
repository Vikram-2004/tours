import { FC, useState } from "react";
import Input from "./Input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import Reveal from "@/lib/Reveal";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    if (res.ok && res.status === 200) {
      toast.success("Signed Up...");
    } else {
      toast.error("Something went wrong");
    }
    setEmail("");
    setName("");
  };
  return (
    <div className="h-[1000px] bg-gradient-to-r from-green-500 to-emerald-500 flex justify-center items-center">
      <div className=" bg-[url('/images/mount.jpg')] bg-no-repeat bg-center bg-cover md:h-3/5 h-auto lg:w-3/5 md:w-4/5 w-[85%]">
        <div className=" bg-white bg-opacity-80 h-full xl:w-1/2 lg:w-3/5  w-full">
          <Reveal>
            <div className="flex  h-full w-full">
              <div className="flex flex-col mt-32  gap-8 w-3/5 max-sm:w-4/5 h-full mx-auto">
                <h1 className="text-2xl text-gray-500 monts text-left max-md:text-center ">
                  SIGN UP FOR OUR NEWS LETTER
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <Input
                      label="name"
                      type="name"
                      placeholder="Avery"
                      value={name}
                      onChange={(e: any) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Input
                      label="email"
                      type="email"
                      placeholder="Avery@email.com"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center mb-12 mt-8">
                    <Button
                      variant="default"
                      type="submit"
                      className="rounded-full text-white hover:shadow-2xl max-sm:text-xs text-md duration-150 bg-green-500 px-8 py-4 hover:bg-green-600 monts ease-in hover:scale-105 transition delay-150 hover:-translate-y-3 mx-auto slideInBottom"
                    >
                      SIGN UP
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
