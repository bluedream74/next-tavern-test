'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        bg-white
      "
    >
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <div
          className="
            w-full
            text-sm
            font-semibold
            px-6
            w-atuo
          "
        >
          <input
            type="text"
            id="email"
            className="
              peer
              w-full
              py-1
              px-2
              text-black
              font-light
              bg-white
              border-0
              rounded-md
              outline-none
              focus:outline-none
              transition
            "
          />
        </div>
        <div
          className="
            pr-2
          "
        >
          <div
            className="
              p-2
              bg-rose-500
              rounded-full
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;