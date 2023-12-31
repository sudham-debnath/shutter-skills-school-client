/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  //   console.log(user);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="px-14 bg-gray-100">
        <div className="navbar flex">
          <div className="navbar-start grid">
          <img className="w-16" src="https://i.ibb.co/SykV0DJ/lense.png" alt="logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold" : ""
                  }
                >
                  Instructors
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold" : ""
                  }
                >
                  Classes
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            {/* Logged User Info */}
            {user?.email ? (
              <div className="flex items-center">
                <button className="btn btn-neutral border-none" onClick={handleLogout}>
                  Logout
                </button>
                <img
                  className="rounded-full w-14 ml-5"
                  src={user?.photoURL}
                  alt={user.email}
                  title={user.displayName}
                />
              </div>
            ) : (
              <Link to="/login">
                <li className="btn btn-neutral border-none">Login</li>
              </Link>
            )}
          </div>


              

        </div>
      </div>
    </div>
  );
};

export default NavBar;
