import React, { ChangeEvent } from "react";

import SearchIcon from "../icons/search-icon";

interface SearchBoxProps {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick?: () => void;
  //  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  placeholder?: string;
  type: "text";
}

const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  value,
  onChange,
  onSearchClick,
  placeholder,
  type,
}) => {
  return (
    <div className="flex">
      <input
        className={`py-2 px-3 border border-gray-300 border-r-0 focus:outline-none shadow-sm disabled:bg-gray-100 block ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <button
        onClick={onSearchClick}
        className="p-3 bg-gray-900 hover:shadow-gray-900/20 focus:shadow-gray-900/20 active:shadow-gray-900/10 border-none"
      >
        <SearchIcon className="bg-white" />
      </button>
    </div>
  );
};

export default SearchBox;
