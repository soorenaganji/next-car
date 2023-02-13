import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import Card from "@/components/module/Card";
import Link from "next/link";
const Filter = () => {
  const router = useRouter();
  let [min, max] = router.query.slug || [];
  console.log([min, max]);
  const filteredData = carsData.filter(
    item => +(min) < +(item.price) && +(item.price) < +(max)
  );
  return (
    <>
      <div className="flex items-center justify-center gap-10 flex-wrap mt-32 ">
        {filteredData.length ? (
          filteredData.map((car) => <Card key={car.id} {...car} />)
        ) : (
          <>
            <div className="flex flex-col items-center justify-start gap-6">
              <h2 className="m-auto text-black mt-32 text-5xl ">
                No Cars Found
              </h2>
              <Link href={"/"} className="m-auto text-blue-600 underline  ">
                Back to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Filter;
