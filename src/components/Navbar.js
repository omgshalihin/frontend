import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div>
    //   <div classNameName="col-auto items-center justify-center bg-black px-5 py-5 text-2xl font-bold text-white">
    //     <Link to="/">
    //       <h1 classNameName="hover:bg-slate-500">User Management System</h1>
    //     </Link>
    //     <Link to="/adduser">
    //       <h1 classNameName="px-4 hover:bg-slate-500">Add User</h1>
    //     </Link>
    //   </div>
    // </div>

    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          User Management System
        </span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <Link
                to="/"
                className="block rounded py-2 pr-4 pl-3 text-gray-700
                hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700
                dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent
                md:hover:text-blue-700 md:dark:hover:bg-transparent
                md:dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/adduser"
                className="block rounded py-2 pr-4 pl-3 text-gray-700
                hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700
                dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent
                md:hover:text-blue-700 md:dark:hover:bg-transparent
                md:dark:hover:text-white"
              >
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
