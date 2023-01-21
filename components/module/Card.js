import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Location from "../icons/Location";
import Link from "next/link";
const Card = (props) => {
  const cat = props.category;
  return (
    <Link
      href={`/${props.id}`}
      className="w-[350px] h-[450px] lg:w-[22%] lg:h-[400px] bg-gray-100 rounded-lg shadow-lg px-1 lg:hover:translate-y-[-15px] "
    >
      <img src={props.image} className="rounded-lg h-[130] w-full " />
      <div className="h-[165px] pt-5 px-3 ">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-xl">
            {props.name} {props.model}{" "}
          </h3>
          {cat == "sport" ? (
            <Sport />
          ) : cat == "suv" ? (
            <Suv />
          ) : cat == "sedan" ? (
            <Sedan />
          ) : cat == "hatchback" ? (
            <Hatchback />
          ) : (
            <div></div>
          )}
        </div>

        <p className="text-gray-600 text-sm ">
          {props.year} - {props.distance}Km
        </p>
        <div className="flex w-full items-center justify-between mt-10 ">
          <p className="bg-blue-600 text-white px-4 py-2 rounded-md">
            {props.price}$
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm">{props.location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
