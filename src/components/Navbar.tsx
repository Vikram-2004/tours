import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="bg-[#474747] h-[5rem] text-white flex justify-between lg:px-20 px-4 items-center">
      <div>
        <h1 className=" font-light text-xl max-md:text-md">
          <Link href="/auth/login">DEDSEC TOURS</Link>
        </h1>
      </div>
      <div className=" flex  gap-4  ">
        <Link href="/auth/login">
          <Button
            variant={null}
            className="rounded-full text-md text-white px-12 py-2 transform hover:bg-white hover:text-black duration-300
           font-light max-md:px-6 max-md:text-md"
          >
            LOG IN
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button
            variant="outline"
            className="bg-[#444444ff] text-md rounded-full px-12  py-2 font-light max-md:px-6 max-md:text-md"
          >
            SIGN UP
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
