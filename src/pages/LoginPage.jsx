import googleIcon from "../assets/flat-color-icons_google.svg";
import facebookIcon from "../assets/Vector.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const signupHandler = async (e) => {
    e.preventDefault();
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    const user = userCredentials.user;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.accessToken);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F1F1F1]  sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md h-[100dvh]">
          <div className="bg-white h-screen  px-4  py-[20%] shadow sm:rounded-lg sm:px-10 flex flex-col justify-center">
            <section>
              <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className=" text-start text-3xl   font-extrabold text-gray-900 font-[Roboto]">
                  Welcome Back
                </h2>
              </div>
              <form
                className="space-y-6"
                id="signup_form_data"
                onSubmit={signupHandler}
              >
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    value={userDetails.email}
                    className="appearance-none rounded-lg relative block w-full font-semibold px-3 py-4 bg-[#F1F1F1]  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                  />
                </div>

                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                    value={userDetails.password}
                    className="appearance-none rounded-lg relative block w-full font-semibold px-3 py-4 bg-[#F1F1F1]  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div className="text-sm my-3">
                  <a
                    href="#"
                    className="font-medium text-[#7F7F7F]  hover:text-blue-500 underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-none text-sm font-medium rounded-md text-white bg-gradient-to-b from-blue-400 to-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </section>
            <section>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full  border-t border-[#7F7F7F]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#2C2B2B]">Or</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center items-center gap-3">
                  <div className="">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-3 border border-[#7F7F7F] rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-6 w-6"
                        src={googleIcon}
                        alt="Google Icon"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-3 border border-[#7F7F7F] rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-6 w-6"
                        src={facebookIcon}
                        alt="Facebook Icon"
                      />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-blue-600 hover:text-blue-500 underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
