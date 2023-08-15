import { FC } from "react";
import { Button } from "./ui/button";
import TourCard from "./TourCard";

interface populatToursProps {}

const PopularTours: FC<populatToursProps> = ({}) => {
  return (
    <div className="py-16 h-auto">
      <h1 className="text-center text-5xl outfit pb-16  slideInTop px-4">
        MOST POPULAR TOURS
      </h1>
      <div className="h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-16">
        <div className="">
          <TourCard
            days={3}
            people={27}
            title="Forest Hiker"
            feature="Explore Majestic Trails "
            about="Explore the Wilderness and Reconnect with Nature"
            difficulty="EASY"
            imguri="images/fores.jpg"
          />
        </div>
        <div className="">
          <TourCard
            days={5}
            people={47}
            title="Sea Explorer"
            feature="Enjoy the Beautiful Sunset"
            about="Discover the Ocean`s Treasures with Us"
            difficulty="MEDIUM"
            imguri="/images/beach.avif"
          />
        </div>
        <div className=" max-lg:col-span-2  max-md:col-span-1">
          <div className="max-lg:w-1/2 max-md:w-full max-lg:mx-auto max-sm:hidden">
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
        </div>
      </div>
      <div className="flex justify-center w-full mt-16">
        <Button className="rounded-full text-white hover:shadow-2xl text-xl duration-150 bg-green-500 px-16 py-8 hover:bg-green-600 monts ease-in hover:scale-105 transition delay-150 hover:-translate-y-3 mx-auto slideInBottom">
          DISCOVER TOURS
        </Button>
      </div>
    </div>
  );
};

export default PopularTours;
