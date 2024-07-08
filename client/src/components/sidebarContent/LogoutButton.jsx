import {BiLogOut} from "react-icons/bi"
import useLogout from "../../hooks/useLogout"
const LogoutButton = () => {

  const {loading, logout} = useLogout()
  return (
    <div className='mt-auto '>
     {!loading ? (
       <button className="btn btn-ghost">
       <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
     </button>
     ) : (
      <span className="loading loading-infinity"></span>
     )}
    </div>
  )
}

export default LogoutButton