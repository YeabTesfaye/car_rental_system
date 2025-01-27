import { CarProps, FilterProps } from '@/types';
import axios from 'axios';

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) searchParams.set(type, value);
  else searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);

  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;
  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { model, year, fuel_type, make } = filters;
  try {
    const { data } = await axios.get('https://api.api-ninjas.com/v1/cars', {
      params: { model, year, fuel_type, make },
      headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY! },
    });
    return data;
  } catch (error: any) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message,
    );
    return [];
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', 'img');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', 'zoomLevel');
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
