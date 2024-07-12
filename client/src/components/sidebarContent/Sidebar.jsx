import ConvoList from "./ConvoList";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className="border-r border-stone-800 w-96">
      <SearchBar />
      <div className="divider px-3"></div>
      <ConvoList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
