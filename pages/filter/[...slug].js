import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import Card from "@/components/module/Card";
import Link from "next/link";
const Filter = () => {
  const router = useRouter();
  let filter = router.query.slug || [0 , 0];
  const min = filter[0]
  const max = filter[1] 
  const filteredData = carsData.filter((car) => {
    JSON.parse(min) < car.price && car.price < JSON.parse(max);
  });
  return (
    <>
      <div className="flex items-center justify-center gap-10 flex-wrap mt-32 ">
      { (
        filteredData.map((car) => (
            <Card key={car.id} {...car} />
        ))
      )}
     </div>
     <div className="flex flex-col items-center justify-start gap-6">
      {filteredData.length == 0 &&
       <>
          <h2 className="m-auto text-black mt-32 text-5xl ">No Cars Found</h2>
          <Link href={"/"} className="m-auto text-blue-600 underline  ">
            Back to Home
          </Link>
        </>}
    </div>
    </>
  );
};

export default Filter;
