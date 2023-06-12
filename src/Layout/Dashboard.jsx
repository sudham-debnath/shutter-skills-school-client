/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { FaChalkboardTeacher, FaUser } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Sidebar
        </label>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <Link className="font-bold" to="/dashboard">
                  <MdOutlineSpaceDashboard/> Back to Dashboard
                </Link>
              </li>
             <li>
                <Link className="font-bold" to="/dashboard/admin">
                  <GrUserAdmin></GrUserAdmin> Admin Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard/instructor">
                  <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard/student">
                  <FaUser /> Student Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard/all-users">
                  <FiUsers /> All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="font-bold" to="/dashboard/admin">
                  <GrUserAdmin></GrUserAdmin> Admin Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard/instructor">
                  <FaChalkboardTeacher></FaChalkboardTeacher> Instructors
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard/student">
                  <FaUser /> Student Dashboard
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
