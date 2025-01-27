import { Hero, CustomFilter, Searchbar, CarCard } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { CarProps, FilterProps } from '@/types';
import { fetchCars } from '@/utils';

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<FilterProps>;
}) => {
  const resolvedParams = await searchParams;

  const allCars = await fetchCars({
    make: resolvedParams.make || '',
    year: resolvedParams.year || 2000,
    fuel_type: resolvedParams.fuel_type || '',
    model: resolvedParams.model || '',
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {allCars && allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: CarProps, index: number) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>Oops, no results found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
