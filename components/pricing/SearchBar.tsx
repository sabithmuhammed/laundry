import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="w-full max-w-[500px] h-[40px] bg-white flex items-center px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-primary-300/50">
            <FaSearch className="text-primary-300 mr-2" />
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-primary-400 placeholder-primary-300"
            />
        </div>
    );
};

export default SearchBar;
