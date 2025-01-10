import { Hero } from '@/components';
import CustomFilter from '@/components/CustomFilter ';
import Searchbar from '@/components/Searchbar';
import { fuels, yearsOfProduction } from '@/constants';
import { FilterProps, HomeProps } from '@/types';
import { fetchCars } from '@/utils';

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<FilterProps>;
}) => {
  const resolvedParams = await searchParams;
  const allCars = await fetchCars({
    manufacturer: resolvedParams.manufacturer || '',
    year: resolvedParams.year || 2025,
    fuel: resolvedParams.manufacturer || '',
    limit: resolvedParams.limit || 10,
    model: resolvedParams.manufacturer || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car: string) => (
                <div>{car}</div>
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>OOps no result</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
