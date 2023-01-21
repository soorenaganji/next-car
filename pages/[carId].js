import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/templates/CarDetails";
const CarId = () => {
    const router = useRouter();
    const  id  = router.query.carId;
    const carDetail = carsData[id - 1]
    return ( <CarDetails {...carDetail} /> );
}

export default CarId;