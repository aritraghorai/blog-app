import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [registerAccountState, setRegisterAccountState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const onChnageHandler = (e) => {
    setRegisterAccountState({
      ...registerAccountState,
      [e.target.name]: e.target.value,
    });
  };
  const registerAccountHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        registerAccountState.password === registerAccountState.passwordConfirm
      ) {
        const user = await createUserWithEmailAndPassword(
          getAuth(),
          registerAccountState.email,
          registerAccountState.password
        );
        await updateProfile(user.user, {
          displayName: registerAccountState.name,
        });
        navigate("/articles");
      }
    } catch (error) {}
  };
  return (
    <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <section>
        <p className="text-gray-600 pt-2 ">Create your account</p>
      </section>

      <section className="mt-10">
        <form className="flex flex-col" onSubmit={registerAccountHandler}>
          {[
            { type: "text", name: "Name", id: "name" },
            { type: "text", name: "Email", id: "email" },
            { type: "password", name: "Password", id: "password" },
            {
              type: "password",
              name: "Enter Your Password Again",
              id: "passwordConfirm",
            },
          ].map((ele) => {
            return (
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  for={ele.id}
                >
                  {ele.name}
                </label>
                <input
                  onChange={onChnageHandler}
                  value={registerAccountState[ele.id]}
                  type={ele.type}
                  name={ele.id}
                  required
                  id={ele.id}
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                />
              </div>
            );
          })}
          <div className="flex justify-end"></div>
          <button
            className="bg-gray-600 mt-[-1rem] hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateAccountPage;
