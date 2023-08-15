import Link from "next/link";
import { FC } from "react";
import SlantedDivrl from "./SlantedDivrl";

interface TestimonialProps {}

const Features: FC<TestimonialProps> = ({}) => {
  return (
    <div className="min-h-[100vh] lg:h-screen h-auto relative bg-[url('/images/mount.jpg')] bg-no-repeat bg-center bg-cover">
      <SlantedDivrl />
      <div className="bg-green-400 bg-opacity-60 h-full w-full ">
        <div className="flex flex-col h-full justify-center gap-20">
          <h1 className=" text-center text-white outfit text-5xl mt-40">
            WE MAKE PEOPLE GENIUENLY HAPPY
          </h1>
          <div className="grid lg:grid-cols-4 place-items-start place-content-center sm:grid-cols-2 grid-cols-1 gap-y-8 mb-40 2xl:mx-40 md:mx-12">
            <div className="bg-gray-100 opacity-90 max-w-sm w-[90%]  rounded-sm mx-auto duration-300 transition hover:-translate-y-6 delay-100">
              <h2 className="text-gray-500 text-3xl outfit text-center pt-12 pb-4 px-4">
                Captivating Adventures Beckon
              </h2>
              <p className="text-slate-400 text-center text-xl open-sans pb-12 pt-4 px-6 ">
                Immerse in enchanting landscapes and thrilling experiences.
                Curated adventure packages.
              </p>
            </div>
            <div className="bg-gray-100 opacity-90 max-w-sm w-[90%] rounded-sm mx-auto duration-300 transition hover:-translate-y-6 delay-100">
              <h2 className="text-gray-500 text-3xl outfit text-center pt-12 pb-4 px-4">
                Unveiling History{"'"}s Secrets
              </h2>
              <p className="text-slate-400 text-center text-xl open-sans pb-12 pt-4 px-6 ">
                Expert-guided cultural tours through ancient cities and
                landmarks. Step into the past and discover the stories that
                shaped civilizations.
              </p>
            </div>
            <div className="bg-gray-100 opacity-90 max-w-sm w-[90%] rounded-sm mx-auto duration-300 transition hover:-translate-y-6 delay-100">
              <h2 className="text-gray-500 text-3xl outfit text-center pt-12 pb-4 px-4">
                Luxury Redefined
              </h2>
              <p className="text-slate-400 text-center text-xl open-sans pb-12 pt-4 px-6">
                Indulge in opulent spa retreats for ultimate relaxation.
                Rejuvenate your senses amidst world-class wellness treatments
              </p>
            </div>
            <div className="bg-gray-100 opacity-90 max-w-sm w-[90%] rounded-sm mx-auto duration-300 transition hover:-translate-y-6 delay-100">
              <h2 className="text-gray-500 text-3xl outfit text-center pt-12 pb-4 px-4">
                Your Journey, Your Way
              </h2>
              <p className="text-slate-400 text-center text-xl open-sans pb-12 pt-4 px-6">
                Crafted-to-order travel experiences tailored to your desires.
                Transform your dreams into reality with personalized
                itineraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
