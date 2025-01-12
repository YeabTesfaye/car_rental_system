'use client';

import { makers } from '@/constants';
import { SearchMakerProps } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const SearchMake = ({ maker, setMaker }: SearchMakerProps) => {
  const [query, setQuery] = useState('');

  const filteredMakers =
    query === ''
      ? makers
      : makers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <div className="search-maker">
      <Combobox value={maker} onChange={setMaker}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-maker__input"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Volkswagen"
          />
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} // Reset the search query after></Transition>
          >
            <ComboboxOptions
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md
             bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {filteredMakers.map((item) => (
                <ComboboxOption
                  key={item}
                  className={({ active }: { active: boolean }) =>
                    `relative search-maker__option ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }: { selected: boolean }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item}
                    </span>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMake;
