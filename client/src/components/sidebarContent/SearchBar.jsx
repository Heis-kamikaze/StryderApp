import { FaSearch } from "react-icons/fa"


const SearchBar = () => {
  return (
    <form className="items-center pt-2 flex flex-row justify-between mx-5">
        <input type="search" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle glass text-white mr-2">
           < FaSearch />
        </button>
        
    </form>
  )
}

export default SearchBar