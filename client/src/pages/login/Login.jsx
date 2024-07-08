import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        
        <div className="w-80 md:w-96 p-6 rounded-3xl shadow-2xl shadow-gray-950 bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">

            <h1 className=" text-gray-700 text-3xl font-semibold text-center">
                Login
                <span className="text-black"> Stryder</span>
            </h1>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base text-slate-800 label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base text-slate-800 label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10 " value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex flex-col items-center justify-center pt-5">
            <button className="btn btn-sm mt-2 w-1/2 bg-blue-800 border-blue-800" type="submit" disabled={loading}>
                {loading ? (<span className="loading loading-dots"></span>) : "Login"}
            </button>
        </div>
            </form>


        </div>


        <div className="p-11 flex flex-col items-center justify-center">
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold " />
        <h2 className="text-white text-lg">
            <Link to="/signup" className="hover:text-blue-600 mt-2">
                Don&apos;t have an account?
            </Link>
        </h2>
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold m-1" />
        </div>

    </div>
  )
}

export default Login