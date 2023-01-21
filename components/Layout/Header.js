import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-[100%] h-[80px] shadow-xl mt-4 mx-auto rounded-lg flex items-center justify-around z-1000 flex-wrap lg:w-[80%] ">
      <Link
        href={"/"}
        className="text-blue-700 hover:shadow-lg p-2 rounded-lg hover:bg-white text-5xl"
      >
        Next Car
      </Link>
      <Link
        href={"/category/sedan"}
        className="items-center gap-2 px-6 py-3 cursor-pointer p-3 hover:bg-white hover:shadow-lg rounded-md hidden lg:flex "
      >
        Sedan
        <Sedan />
      </Link>
      <Link
        href={"/category/suv"}
        className="items-center gap-2 px-6 py-3 cursor-pointer p-3 hover:bg-white hover:shadow-lg rounded-md hidden lg:flex "
      >
        SUV
        <Suv />
      </Link>
      <Link
        href={"/category/hatchback"}
        className="items-center gap-2 px-6 py-3 cursor-pointer p-3 hover:bg-white hover:shadow-lg rounded-md hidden lg:flex "
      >
        Hatch Back
        <Hatchback />
      </Link>
      <Link
        href={"/category/sport"}
        className="items-center gap-2 px-6 py-3 cursor-pointer p-3 hover:bg-white hover:shadow-lg rounded-md hidden lg:flex "
      >
        Sport Cars
        <Sport />
      </Link>
    </div>
  );
};

export default Header;
