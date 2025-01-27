'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import SearchMaker from './SearchMaker';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={'/magnifying-glass.svg'}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const Searchbar = () => {
  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');
  console.log(maker);
  console.log(model);

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (maker.trim() === '' && model.trim() === '') {
      return alert('please provide some input');
    }

    updateSearchParams(model.toLowerCase(), maker.toLowerCase());
  };

  const updateSearchParams = (model: string, maker: string) => {
    // Create a new URLSearchParams object using the current URL search parameter
    const searchParams = new URLSearchParams(window.location.search);

    // Helper function to update or remove parameter
    const updateParam = (key: string, value: string) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    };

    // Update 'model' and 'maker' parameter
    updateParam('model', model);
    updateParam('maker', maker);

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newUrl);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMaker maker={maker} setMaker={setMaker} />

        <SearchButton otherClasses="sm:hidden" />
        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="car model"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan..."
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
};

export default Searchbar;
