import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="bg-[#474747] h-[5rem] text-white flex justify-between lg:px-20 px-4 items-center ">
      <div>
        <h1 className=" font-normal text-xl max-sm:text-sm monts hover:border-b-2 slideInLeft">
          <Link href="/auth/login">DEDSEC TOURS</Link>
        </h1>
      </div>
      <div className=" flex  gap-4  ">
        <Link href="/auth/login">
          <Button
            variant={null}
            className=" hover:-skew-y-2 rounded-full text-md text-white px-12 py-2 transition hover:bg-white hover:text-black 
           font-normal max-md:px-6 max-sm:text-sm monts ease-in hover:scale-105 duration-150 slideInRight"
          >
            LOG IN
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button
            variant="outline"
            className="hover:skew-y-2 bg-[#444444ff] text-md rounded-full px-12  py-2 font-normal max-md:px-6  monts
            ease-in hover:scale-105 transition duration-150 max-sm:text-sm slideInRight"
          >
            SIGN UP
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
