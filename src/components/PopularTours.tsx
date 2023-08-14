import { FC } from "react";
import { Button } from "./ui/button";
import TourCard from "./TourCard";

interface pricingProps {}

const PopularTours: FC<pricingProps> = ({}) => {
  return (
    <div className="py-16">
      <h1 className="text-center text-5xl monts pb-16  slideInTop px-4">
        MOST POPULAR TOURS
      </h1>
      <div className="h-auto items-center flex justify-center max-md:flex-col py-8 gap-6">
        <TourCard
          days={3}
          people={27}
          title="Forest Hiker"
          feature="Explore Majestic Trails "
          about="Explore the Wilderness and Reconnect with Nature"
          difficulty="MEDIUM"
          imguri="images/fores.jpg"
        />
        <TourCard
          days={5}
          people={47}
          title="Sea Explorer"
          feature="Enjoy the Beautiful Sunset"
          about="Discover the Ocean`s Treasures with Us"
          difficulty="MEDIUM"
          imguri="/images/beach.avif"
        />
        <TourCard
          days={10}
          people={33}
          title="Snow Adventurer"
          feature="Enjoy Northern Lights at Night"
          about="Your gateway to icy excitement and snowy exploration"
          difficulty="HARD"
          imguri="/images/snow.jpg"
        />
      </div>
      <div className="flex justify-center w-full mt-16">
        <Button className="rounded-full text-black hover:shadow-2xl text-xl duration-150 bg-green-500 px-16 py-8 hover:bg-green-600 monts ease-in hover:scale-105 transition delay-150 hover:-translate-y-3 mx-auto slideInBottom">
          DISCOVER TOURS
        </Button>
      </div>
    </div>
  );
};

export default PopularTours;
