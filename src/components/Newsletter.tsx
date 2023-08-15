import { FC, useState } from "react";
import Input from "./Input";
import { Button } from "./ui/button";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="h-screen bg-gradient-to-r from-green-500 to-emerald-500 flex justify-center items-center">
      <div className=" bg-[url('/images/mount.jpg')] bg-no-repeat bg-center bg-cover md:h-3/5 h-auto lg:w-3/5 md:w-4/5 w-[85%]">
        <div className=" bg-white bg-opacity-70 h-full xl:w-1/2 lg:w-3/5  w-full">
          <div className="flex  h-full w-full">
            <div className="flex flex-col mt-32  gap-8 w-3/5  h-full mx-auto">
              <h1 className="text-2xl text-gray-500 monts text-left ">
                SIGN UP FOR OUR NEWS LETTER
              </h1>
              <div>
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
                  onClick={handleClick}
                  className="rounded-full text-white hover:shadow-2xl max-sm:text-xs text-md duration-150 bg-green-500 px-8 py-4 hover:bg-green-600 monts ease-in hover:scale-105 transition delay-150 hover:-translate-y-3 mx-auto slideInBottom"
                >
                  DISCOVER TOURS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
