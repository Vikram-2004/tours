import { FC, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import PopupNavigation from "./PopupNavigation";
import { IconContext } from "react-icons";
interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  return (
    <>
      <IconContext.Provider value={{ size: "3.5em", color: "skyblue" }}>
        <div className="fixed z-50 sm:right-16 sm:top-16 right-4 top-4 slideInRight">
          <button
            className="rounded-full bg-white "
            onClick={() => setIsPopup(!isPopup)}
          >
            {isPopup === false ? <MdOutlineArrowDropDown /> : <GrFormClose />}
          </button>
        </div>
        {isPopup === true && <PopupNavigation />}
      </IconContext.Provider>
    </>
  );
};

export default Navigation;
