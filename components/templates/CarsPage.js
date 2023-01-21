import Card from "../module/Card";

const CarsPage = ({ data }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {data.length ? data.map((car) => (
          <Card key={car.id} {...car} />
        )) : <h2>There Are No Cars Which Fit this Budget :(</h2>}
      
      </div>
    </div>
  );
};

export default CarsPage;
