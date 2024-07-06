import ConvoList from "./ConvoList";
import LogoutButton from "./LogoutButton";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className="w-screen h-screen sm:w-auto md:w-auto">
      <div className="border-r border-stone-800">
        <SearchBar />
        <div className="divider px3"></div>
        <ConvoList />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
