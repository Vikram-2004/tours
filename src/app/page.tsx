"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PopularTours from "@/components/PopularTours";
import SlantedDivrl from "@/components/SlantedDivrl";

export default function Home() {
  return (
    <div className="relative ">
      <Navigation />
      <div className="sm:mx-8 bg-gray-100 overflow-x-hidden relative">
        <div className="sm:mt-8">
          <Hero />
        </div>
        <PopularTours />

        <div className="h-screen relative bg-[url('/images/beach-bg.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="block">
            <SlantedDivrl />
          </div>
          <div className="bg-white bg-opacity-40 h-full w-full">
            <div className="pt-40 pb-8 my-auto">
              <h1 className="text-center monts text-5xl text-black ">
                WE MAKE PEOPLE GENUINELY HAPPY
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center my-auto">
              <div className="w-2/4 bg-white px-8 py-4">
                <p>name:fhsd</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati ab, ad voluptate, animi accusamus debitis vitae
                  ipsam beatae mollitia, facilis deleniti rerum quidem? Ipsum
                  aliquam facilis natus, dolorum dolorem iure!
                </p>
              </div>
              <div className="w-2/4 bg-white px-8 py-4 ">
                <p>name:fhsd</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Obcaecati ab, ad voluptate, animi accusamus debitis vitae
                  ipsam beatae mollitia, facilis deleniti rerum quidem? Ipsum
                  aliquam facilis natus, dolorum dolorem iure!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen "></div>
      </div>
    </div>
  );
}
