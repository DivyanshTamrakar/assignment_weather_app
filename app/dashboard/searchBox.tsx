import { FaSearch, FaTimes } from "react-icons/fa";
import { BiCrosshair } from "react-icons/bi";

export default function SearchBox() {
  return (
    <div className="search-box flex bg-white gap-3 items-center justify-center">
      <FaSearch className="search-icon text-black " />
      <input
        type="text"
        placeholder="Search for places..."
        className="search-input outline-none text-black"
      />
      <BiCrosshair className=" text-black" />
    </div>
  );
}
