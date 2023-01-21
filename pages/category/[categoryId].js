import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import Card from "@/components/module/Card";
const Categories = () => {
  const router = useRouter();
  const category = router.query.categoryId;
  const filteredCars = carsData.filter((car) => car.category === category);
  return (
    <div className="flex items-center justify-center gap-10 flex-wrap mt-32 ">
      {filteredCars.map((car) => (
        <Card {...car} key={car.id} />
      ))}
    </div>
  );
};

export default Categories;
