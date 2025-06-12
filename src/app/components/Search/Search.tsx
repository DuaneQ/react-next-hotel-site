'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };

  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg'>
      <div className='container mx-auto flex flex-col md:flex-row gap-4 justify-between items-center'>
        {/* Room Type Dropdown */}
        <div className='flex-1 min-w-[180px]'>
          <label className='block text-sm font-medium mb-2 text-black'>
            Room Type
          </label>
          <div className='relative'>
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className='w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none'
            >
              <option value='All'>All</option>
              <option value='Basic'>Basic</option>
              <option value='Luxury'>Luxury</option>
              <option value='Suite'>Suite</option>
            </select>
          </div>
        </div>

        {/* Search Input */}
        <div className='flex-1 min-w-[180px]'>
          <label className='block text-sm font-medium mb-2 text-black'>
            Search
          </label>
          <input
            type='search'
            id='search'
            placeholder='Search...'
            className='w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white'
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        {/* Search Button */}
        <div className='flex-shrink-0 mt-4 md:mt-6'>
          <button
            className='btn-primary'
            type='button'
            onClick={handleFilterClick}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;