import Sidebar from "../../components/sidebarContent/Sidebar"
import MessageContainer from './../../components/messageContainer/MessageContainer';


const Home = () => {
  return (
    <div className="flex h-full w-full rounded-xl shadow-2xl shadow-gray-950 overflow-y-hidden bg-gray-600 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <Sidebar/>
        <MessageContainer />
    </div>
  )
}

export default Home