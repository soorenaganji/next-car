import { useRouter } from "next/router";
import Back from "../../public/back.png";
import Calender from "@/components/icons/Calender";
import Road from "@/components/icons/Road";
import Company from "@/components/icons/Company";
import Money from "@/components/icons/Money";
import Model from "@/components/icons/Model";
import Location from "@/components/icons/Location";
import Link from "next/link";
import Image from "next/image";
const CarDetails = (props) => {
  const {
    name,
    image,
    location,
    model,
    year,
    id,
    distance,
    price,
    description,
    category,
  } = props;
  console.log(props);
  return (
    <div>
      <img
        src={image}
        alt=""
        className="w-[50%] h-[50%] mx-auto  rounded-2xl  mt-10"
      />
      <h2 className="text-4xl mt-16 ml-36 ">
        {name} {model}{" "}
      </h2>
      <div className="w-[80%] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-5 mx-auto my-10 ">
        <div className="flex w-full items-center justify-between px-5 py-2 ">
          <div className="flex items-center justify-center gap-2">
            {" "}
            <Company /> Company
          </div>{" "}
          <p>{name}</p>{" "}
        </div>
        <div className="flex w-full items-center justify-between px-5 py-2 ">
          <div className="flex items-center justify-center gap-2">
            {" "}
            <Model /> Model
          </div>{" "}
          <p>{model}</p>{" "}
        </div>
        <div className="flex w-full items-center justify-between px-5 py-2 ">
          <div className="flex items-center justify-center gap-2">
            <Road /> Kms Driven
          </div>{" "}
          <p>{distance} </p>{" "}
        </div>
        <div className="flex w-full items-center justify-between px-5 py-2 ">
          <div className="flex items-center justify-center gap-2">
            <Calender /> First Registered
          </div>{" "}
          <p>{year}</p>{" "}
        </div>
      </div>

      <div className="flex w-[80%] mx-auto rounded-lg shadow-2xl items-center justify-between px-5 py-8 mb-8 ">
        <div className="flex items-center justify-center gap-2">
          <Location /> Current Location
        </div>{" "}
        <p>{location}</p>
      </div>
      <div className="w-[80%] mx-auto rounded-lg shadow-2xl px-5 py-8 mb-8 ">
        {" "}
        <h2 className="text-3xl mb-5 ">Extra Info</h2>
        <p className="text-justify">{description}</p>{" "}
      </div>
      <div className="flex w-[80%] mx-auto rounded-lg shadow-2xl items-center justify-between px-5 py-8 mb-8 ">
        <div className="flex items-center justify-center gap-2">
          {" "}
          <Money /> Price
        </div>{" "}
        {price}${" "}
      </div>
      <div className="flex items-center justify-center">
        <button className="w-80 h-28 text-4xl p-2 rounded-lg text-white bg-blue-600 mx-auto ">
          Buy
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
