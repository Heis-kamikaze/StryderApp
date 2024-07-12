import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search) return;

    const searchConvo = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(searchConvo) {
      setSelectedConversation(searchConvo)
      setSearch('')
    } else toast.error("We couldn't find anyone using that username")
  }

  return (
    <form className="items-center gap-2 flex p-auto" onSubmit={handleSubmit}>
        <input type="search" placeholder="Search for your mutuals..." className="input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className={`btn btn-circle glass text-white ${search === "" ? "disabled" : "bg-blue-700"}`}>
           < FaSearch className={`w-4 h-4 ${search === "" ? "text-gray-500" : ""}`}/>
        </button>
        
    </form>
  )
}

export default SearchBar