import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";


const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignUp()

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto max-h-screen">
      <div className="w-80 md:w-96 p-6 rounded-3xl shadow-2xl shadow-gray-950 bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className=" text-gray-700 text-3xl font-semibold text-center">
          SignUp /<span className="text-black"> Stryder</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-slate-800 label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.emailAddress}
              onChange={(e) => setInputs({ ...inputs, emailAddress: e.target.value })}
            />
          </div>

          <GenderCheckBox onCheckBoxChange ={handleCheckBoxChange} selectedGender ={inputs.gender} />

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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              placeholder="Confirm password"
              className="w-full input input-bordered h-10 "
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <div className="flex flex-col items-center justify-center pt-5">
              <button
                className="btn btn-sm mt-2 w-1/2 bg-blue-800 border-blue-800"
                type="submit" disabled={loading}
              >
                {loading? <span className="loading loading-dots bg-white"></span> : "Sign Up"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center">
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold " />
        <h2 className="text-white text-lg">
          <Link to="/login" className="hover:text-blue-600 mt-2">
            Already have an account?
          </Link>
        </h2>
        <hr className="w-16 md:w-20 text-gray-950 font-extrabold m-1" />
      </div>
    </div>
  );
};

export default Signup;
