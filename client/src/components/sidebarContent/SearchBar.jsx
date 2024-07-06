import { FaSearch } from "react-icons/fa"


const SearchBar = () => {
  return (
    <form className="items-center pt-2 mx-2 flex flex-row justify-between">
        <input type="search" placeholder="Search..." className="input input-bordered rounded-full mr-3" />
        <button type="submit" className="btn btn-circle glass text-white">
           < FaSearch />
        </button>
        
    </form>
  )
}

export default SearchBar