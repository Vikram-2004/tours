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
    <div className="2xl:max-w-lg  md:w-[30%] w-[80%]  mx-auto rounded-lg shadow-2xl slideInTop">
      <div className="relative bg-zinc-50">
        <img src={imguri} alt="" className=" rounded-t-lg w-full" />
        <h1 className="text-2xl text-center  pt-8 pb-2">{title}</h1>
        <h2 className="px-4 text-slate-500 text-center ">{about}</h2>
        <div className="flex flex-col  items-center justify-center text-center w-full h-full py-8">
          <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
            <h3>{days} DAY TOUR</h3>
          </div>
          <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
            <h3>UPTO {people} PEOPLE</h3>
          </div>
          <div className="w-4/5 border-b-2 border-b-slate-200 py-4 ">
            <h3>{feature}</h3>
          </div>
          <div className="w-4/5 py-4">
            <h3>DIFFICULTY {difficulty}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
