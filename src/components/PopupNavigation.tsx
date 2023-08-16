import Link from "next/link";
import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface PopupNavigationProps {}

const PopupNavigation: FC<PopupNavigationProps> = ({}) => {
  return (
    <div className="h-screen fixed bg-gradient-to-r from-cyan-500 to-teal-500 z-30 w-screen fadeInAni">
      <div className="flex justify-center w-full h-full flex-col items-center text-slate-700 gap-4 text-3xl">
        <div className="xl:w-1/5 w-auto text-center py-4 text-white hover:text-cyan-500 monts  hover:bg-white transition-all duration-150 hover:-translate-y-3">
          <h1>01 ABOUT US</h1>
        </div>
        <div className="xl:w-1/5 w-auto text-center py-4 text-white hover:text-cyan-500 monts  hover:bg-white transition-all duration-150 hover:-translate-y-3">
          <h1>02 POPULAR TOURS</h1>
        </div>
        <div className="xl:w-1/5 w-auto text-center py-4 text-white hover:text-cyan-500 monts  hover:bg-white transition-all duration-150 hover:-translate-y-3">
          <h1>03 CONTACT US</h1>
        </div>
        <div className="xl:w-1/5 w-auto text-center py-4 text-white hover:text-cyan-500 monts  hover:bg-white transition-all duration-150 hover:-translate-y-3">
          <h1>04 FOLLOW US</h1>
        </div>
      </div>
    </div>
  );
};

export default PopupNavigation;
