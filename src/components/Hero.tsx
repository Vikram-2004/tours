import { FC } from "react";
import SlantedDiv from "./SlantedDivlr";
import { Button } from "./ui/button";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="relative bg-[url('/images/sea.jpg')] bg-no-repeat bg-cover bg-center sm:h-[980px] h-[800px] ">
      <div className="bg-black bg-opacity-5 h-full w-full z-20">
        <div>
          <h2 className="text-xl px-4 md:px-8 md:text-4xl font-normal monts  text-white py-8 slideInLeft ">
            DEDSEC TOURS
          </h2>
        </div>
        <div className="flex justify-center ">
          <div className="sm:my-32 my-28 px-18">
            <h1 className=" outfit tracking-[1rem] sm:tracking-[1.5rem] font-medium   mb-8 text-6xl text-center  text-slate-200 md:text-7xl lg:text-8xl slideInTop">
              TOURS
            </h1>
            <h2 className="text-slate-200  text-4xl monts md:text-4xl lg:text-5xl tracking-widest text-center  max-w-3xl mx-auto px-4 slideInBottom ">
              Embark on Extraordinary Journeys with Us
            </h2>
            <div className="flex justify-center w-full mt-8">
              <Button className="rounded-full text-slate-500 hover:shadow-2xl text-xl duration-150 bg-white px-16 py-8 hover:bg-slate-300 monts ease-in hover:scale-105 transition delay-150 hover:-translate-y-3 mx-auto slideInBottom">
                DISCOVER TOURS
              </Button>
            </div>
          </div>
        </div>
        <SlantedDiv />
      </div>
    </div>
  );
};

export default Hero;
