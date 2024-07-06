import {BiLogOut} from "react-icons/bi"
const LogoutButton = () => {
  return (
    <div className='mt-auto '>
      <button className="btn btn-ghost">
        <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
      </button>
    </div>
  )
}

export default LogoutButton