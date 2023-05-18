import React from "react";
// import logo from "../../../public/grontho-bilash-log.png";
import { Link } from "react-router-dom";

import { BiHome } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import {
RiFileListLine,
RiUserReceivedLine,
RiUserSharedLine,
RiShoppingCartLine,
} from "react-icons/ri";




const Header = () => {
  const user= {email: "user@example.com"}

  return (
    <nav className="navbar  bg-base-100 grid grid-cols-1 gap-5 px-16 py-4 sticky top-0  w-full">
      {/* Logo */}

      <div className="flex gap-12 w-full">
        <div className=" w-1/6 ">
          <a className=" ">
            
            <img className="w-56" src="https://i.ibb.co/TvkddBR/wepik-export-20230517174602-QZb-L.png" alt="" />
          </a>
        </div>

        {/* Search bar */}
        <div className="form-control w-3/6">
          <div className="input-group">
            <input
              type="text"
              placeholder="search toys"
              className="input  bg-base-300 w-full"
            />
            <button className="btn btn-square px-10">
              Search
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */}
            </button>
          </div>
        </div>

        {/* Menu */}

        <div className=" menu-item  w-2/6  ml-4">
          <ul className="flex md:flex-row  items-center sm:flex-col  px-1  ">
            <Link className="mr-4 text-xl " to="/cart">
              <RiShoppingCartLine className="h-8 hover-bodered w-8 pr-2 text-yellow" />{" "}
            </Link>

            {user?.email ? (
              <>
                <div className="flex gap-2 justify-center items-center hover:border hover:bg-gray-100 hover:rounded-md">
                  <RiUserReceivedLine className="h-6 w-6" />
                  <Link className="mr-12 text-xl  " to="/dashboard">
                    Dashboard
                  </Link>
                </div>
                <div className="flex gap-2 justify-center items-center hover:border hover:bg-gray-100 hover:rounded-md">
                  <RiUserReceivedLine className="h-6 w-6" />
                  <Link className=" text-xl  " to="/logout">
                    Sign Out
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex gap-2 justify-center items-center hover:border hover:bg-gray-100 hover:rounded-md">
                <RiUserReceivedLine className="h-6 w-6" />
                <Link className="mr-12 text-xl  " to="/login">
                  Sign in
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex">
          <div className="flex gap-1 hover:text-blue-400">
            <BiHome className="h-6 w-6" />
            <Link className="mr-12 text-xl  " to="/">
              <span> Home</span>
            </Link>
          </div>
          <div className="flex gap-1 hover:text-blue-400">
            <BsShopWindow className="h-6 w-6" />
            <Link className="mr-12 text-xl  " to="/shop">
              Shop
            </Link>
          </div>
          <div className="flex gap-1 hover:text-blue-400">
            <RiFileListLine className="h-6 w-6" />
            <Link className="mr-12 text-xl  " to="/blog">
              Categories
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  

       
    );
};

export default Header;