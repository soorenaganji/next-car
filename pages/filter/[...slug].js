import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import Card from "@/components/module/Card";
const Filter = () => {
  const router = useRouter();
  const filter = router.query.slug || [];
  const min = filter[0];
  const max = filter[1];
  const filteredData = carsData.filter(
    (car) => JSON.parse(min) < car.price && car.price < JSON.parse(max)
  );
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap mt-32 ">
      {filteredData.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default Filter;
