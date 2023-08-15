"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PopularTours from "@/components/PopularTours";
import Feature from "@/components/Features";

export default function Home() {
  return (
    <div className="relative ">
      <Navigation />
      <div className="sm:mx-8 bg-gray-100 overflow-x-hidden relative">
        <div className="sm:mt-8">
          <Hero />
        </div>
        <PopularTours />
        <Feature />
        <div className="h-screen "></div>
      </div>
    </div>
  );
}
