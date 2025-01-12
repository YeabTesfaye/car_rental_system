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

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }
    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (maker) {
      searchParams.set('maker', maker);
    } else {
      searchParams.delete('maker');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
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
