import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterauthProps {}

const Footer: FC<FooterauthProps> = ({}) => {
  return (
    <div className="bg-gray-200 ">
      <div className="flex justify-end px-12 max-sm:justify-center">
        <div className="flex flex-col">
          <div className="pl-auto py-2 monts ">
            <h1 className="text-slate-400 max-sm:text-center">
              &copy; vikram 2023
            </h1>
          </div>
          <div className="flex items-center monts pb-4 mx-auto">
            <p className="text-slate-400 max-sm:text-center">
              Contact me at{" "}
              <a
                href="mailto: srimanvgn@gmail.com"
                className="text-slate-400 hover:underline "
              >
                srimanvgn@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
