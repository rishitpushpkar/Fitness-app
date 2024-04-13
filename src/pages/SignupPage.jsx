import { Link } from "react-router-dom";
import googleIcon from "../assets/flat-color-icons_google.svg";
import facebookIcon from "../assets/Vector.svg";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc, collection } from "firebase/firestore";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  const termsAndConditionsRef = useRef(false);
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const signupHandler = async (e) => {
    e.preventDefault();

    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    const user = userCredentials.user;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.accessToken);
    const token = localStorage.getItem("token");
    if (token) {
      const db = getFirestore();

      const usersCollection = collection(db, "users");

      const data = {
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        email: userDetails.email,
        uid: user.uid,
      };

      const myDocRef = doc(usersCollection, user.uid);

      await setDoc(myDocRef, data);

      // console.log("Document written with ID: ", docRef);
      navigate("/mainScreen");
    }
    console.log(user);
  };

  return (
    <>
      <div className="min-h-screen bg-[#F1F1F1] sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md h-[100dvh]">
          <div className="bg-white h-screen px-4  py-[15%] shadow sm:rounded-lg sm:px-10 flex flex-col justify-center">
            <section>
              <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className=" text-start text-3xl   font-extrabold text-gray-900 font-[Roboto]">
                  Create an account
                </h2>
              </div>
              <form
                className="space-y-6 "
                id="signup_form_data"
                onSubmit={signupHandler}
              >
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        first_name: e.target.value,
                      })
                    }
                    value={userDetails.first_name}
                    className="appearance-none rounded-lg relative block w-full font-semibold px-3 py-4 bg-[#F1F1F1]  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="First Name"
                  />
                </div>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        last_name: e.target.value,
                      })
                    }
                    value={userDetails.last_name}
                    className="appearance-none rounded-lg relative block w-full font-semibold px-3 py-4 bg-[#F1F1F1]  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                  />
                </div>
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      ref={termsAndConditionsRef}
                      required
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-[12px] text-gray-500"
                    >
                      By proceeding, I agree to all{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500 underline"
                      >
                        T&C
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500 underline"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-none text-sm font-medium rounded-md text-white bg-gradient-to-b from-blue-400 to-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create an Account
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
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    className="font-medium text-blue-600 hover:text-blue-500 underline"
                  >
                    Login
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
