import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../redux/slice/searchSlice";
import PropTypes from "prop-types";

function Header({ onAddClick }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.search.query);

  const handleInputSearch = (e) => {
    dispatch(addSearch(e.target.value));
  };

  return (
    <header className="w-full flex justify-center items-center bg-[#0000001b] px-2 py-2 sm:px-8 sm:py-4">
      <div className="flex justify-end sm:justify-between max-w-[1440px] w-full">
      <h2 className="text-2xl hidden sm:block">Task Manager</h2>
      <div className="flex gap-2">
        <div className="flex justify-center items-center border border-[#0000006c] rounded overflow-hidden w-fit">
          <input
            type="search"
            className="h-full px-2 bg-transparent outline-none"
            placeholder="Search"
            value={value}
            onChange={handleInputSearch}
          />
          <IoSearch className="mx-1 text-lg" />
        </div>
        <button
          type="button"
          onClick={onAddClick}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          Add Task
        </button>
      </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onAddClick: PropTypes.func,
};

export default Header;
