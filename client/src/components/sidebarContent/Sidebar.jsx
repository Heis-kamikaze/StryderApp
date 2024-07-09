import ConvoList from "./ConvoList";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className="h-screen sm:w-5/12 md:w-auto overflow-y-auto">
      <div className="border-r border-stone-800 w-96">
        <SearchBar />
        <div className="divider px3"></div>
        <ConvoList />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
