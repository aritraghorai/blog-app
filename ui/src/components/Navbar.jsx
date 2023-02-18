import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/FireBaseAuthContext/FreBaseAuthContext";
import { signOut, getAuth } from "firebase/auth";

const Navbar = () => {
  const { state } = useLocation();
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await signOut(getAuth());
    navigate("/login");
  };
  return (
    <nav className="bg-gray-50  border-b-4 border-gray-800">
      <ul className="container mx-auto flex justify-around items-center">
        {[
          { ele: "Home", path: "/" },
          { ele: "About", path: "/about" },
          { ele: "Articles", path: "/articles" },
        ].map(({ ele, path }) => (
          <li
            key={ele}
            className={`font-bold  p-3 mx-0 ${
              ele == state ? "activeNavItem" : ""
            }`}
          >
            <Link
              to={path}
              className="p-3  h-[100%] hover:activeNavItem "
              state={ele}
            >
              {ele}
            </Link>
          </li>
        ))}
        {token === undefined ? (
          [
            { ele: "Login", path: "/login" },
            { ele: "Register", path: "/create-account" },
          ].map(({ ele, path }) => (
            <li
              key={ele}
              className={`font-bold  p-3 mx-0 ${
                ele == state ? "activeNavItem" : ""
              }`}
            >
              <Link
                to={path}
                className="p-3  h-[100%] hover:activeNavItem "
                state={ele}
              >
                {ele}
              </Link>
            </li>
          ))
        ) : (
          <li className={`font-bold   mx-0 `}>
            <button
              onClick={logoutHandler}
              className="p-3  h-[100%] hover:activeNavItem "
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
