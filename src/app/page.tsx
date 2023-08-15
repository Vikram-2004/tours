"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PopularTours from "@/components/PopularTours";
import Feature from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative ">
      <Navigation />
      <div className="sm:mx-8 bg-gray-100 overflow-x-hidden relative">
        <div className="sm:my-8">
          <Hero />
          <PopularTours />
          <Feature />
          <PopularTours />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
}
