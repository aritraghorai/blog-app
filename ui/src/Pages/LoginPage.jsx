import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChnageHandler = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        getAuth(),
        loginState.email,
        loginState.password
      );
      navigate("/articles");
    } catch (error) {
      console.log("hi");
      toast.error("Invalid email and password");
    }
  };
  return (
    <>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={loginHandler}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={loginState.email}
                onChange={onChnageHandler}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginState.password}
                onChange={onChnageHandler}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
            </div>

            <button
              className="bg-gray-600 mt-[-1rem] hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Sign In
            </button>
            <div className="flex justify-start">
              <p
                href="#"
                className="text-sm text-black mt-2 hover:text-purple-700 hover:underline mb-6"
              >
                Don't have an account?
              </p>
            </div>
            <button
              className="bg-gray-600 mt-[-1rem] hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              onClick={() => {
                navigate("/create-account");
              }}
            >
              Sign Up Now
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
