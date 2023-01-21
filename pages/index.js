import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import carsData from "@/data/carsData";
import banner from "../public/images/Banner.svg";
import CarsPage from "@/components/templates/CarsPage";
import SearchBar from "@/components/templates/SearchBar";
import Hatchback from "../components/icons/Hatchback";
import Sedan from "../components/icons/Sedan";
import Suv from "../components/icons/Suv";
import Sport from "../components/icons/Sport";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CarShop</title>
      </Head>
      <main>
        <div className="w-screen  bg-gradient-to-br from-transparent via-blue-200 to-blue-500 rounded-b-full pt-[180px] lg:pt-[80px] lg:pb-10 pb-20 z-0 mt-[-100px] ">
          <Image src={banner} className="w-[100%]  mx-auto z-2 lg:w-[50%]  " />
        </div>
        <SearchBar />
        <div className="lg:hidden ">
          <h2 className="text-xl text-center mb-2 ">Categories</h2>

          <div className="lg:hidden w-[95%] h-[300px]  mx-auto mb-10 py-5 gap-2 flex flex-col bg-blue-500 rounded-lg px-3 ">
            <h3></h3>
            <Link
              href={"/category/sedan"}
              className="items-center gap-3 px-6 py-3 justify-center  h-32  cursor-pointer p-3 bg-white rounded-md flex basis-1/2 "
            >
              Sedan
              <Sedan />
            </Link>
            <Link
              href={"/category/suv"}
              className="items-center gap-3 px-6 py-3 justify-center  h-32  cursor-pointer p-3 bg-white rounded-md flex basis-1/2 "
            >
              SUV
              <Suv />
            </Link>
            <Link
              href={"/category/hatchback"}
              className="items-center gap-3 px-6 py-3 justify-center  h-32  cursor-pointer p-3 bg-white rounded-md flex basis-1/2 "
            >
              Hatch Back
              <Hatchback />
            </Link>
            <Link
              href={"/category/sport"}
              className="items-center gap-3 px-6 py-3 justify-center  h-32  cursor-pointer p-3 bg-white rounded-md flex basis-1/2 "
            >
              Sport Cars
              <Sport />
            </Link>
          </div>
        </div>
        <CarsPage data={carsData} />
      </main>
    </>
  );
}
