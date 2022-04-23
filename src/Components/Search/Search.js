import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  return (
    <div className="mr-3 md:mr-1 md:block p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Search</span>
      <Link to={`/search/${input}`}>
        <SearchIcon className="absolute m-2 w-6 h-6" aria-hidden="true" />
      </Link>
      <input
        type="text"
        onChange={(evt) => setInput(evt.target.value)}
        className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default Search;
