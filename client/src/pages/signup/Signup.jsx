import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto max-h-screen">
      <div className="w-80 md:w-96 p-6 rounded-3xl shadow-2xl shadow-gray-950 bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className=" text-gray-700 text-3xl font-semibold text-center">
          Login
          <span className="text-black"> Stryder</span>
        </h1>

        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full input input-bordered h-10 "
            />
          </div>

          <GenderCheckBox />
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Create a username"
              className="w-full input input-bordered h-10 "
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 "
            />
          </div>

          <div>
            <label className="label p-2">
                <span className="text-base text-slate-800 label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10 "
            />
          </div>
        </form>

        <div className="flex flex-col items-center justify-center pt-5">
          <button className="btn btn-sm mt-2 w-1/2 bg-blue-800 border-blue-800">
            Sign Up
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center">
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold " />
        <h2 className="text-white text-lg">
          <a href="#" className="hover:text-blue-600 mt-2">
            Already have an account?
          </a>
        </h2>
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold m-1" />
      </div>
    </div>
  );
};

export default Signup;
