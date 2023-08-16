import Reveal from "@/lib/Reveal";
import { FC } from "react";

interface TourCardProps {
  days: number;
  title: string;
  feature: string;
  people: number;
  difficulty: string;
  about: string;
  imguri: string;
}

const TourCard: FC<TourCardProps> = ({
  days,
  title,
  feature,
  people,
  difficulty,
  about,
  imguri,
}) => {
  return (
    <div className="mx-auto xl:w-[70%] lg:[85%] md:w-[80%] max-md:w-[85%] rounded-lg shadow-2xl slideInTop duration-300 transition hover:-translate-y-6 delay-100">
      <Reveal>
        <div className="relative bg-zinc-50">
          <img src={imguri} alt="" className=" rounded-t-lg w-full" />
          <h1 className="text-2xl text-center  pt-8 pb-2">{title}</h1>
          <h2 className="px-4 text-slate-500 text-center ">{about}</h2>
          <div className="px-4 flex flex-col  items-center justify-center text-center w-full h-full py-8">
            <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
              <h3>{days} DAY TOUR</h3>
            </div>
            <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
              <h3>UPTO {people} PEOPLE</h3>
            </div>
            <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
              <h3>{feature}</h3>
            </div>
            <div className="w-4/5 p-4">
              <h3>DIFFICULTY {difficulty}</h3>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default TourCard;
