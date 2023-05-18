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
    <>
   <div className="bg-gray-100 py-4">
   <div className="row">
    <div className="navbar  justify-between items-center ">
    <div className="">
      <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className="w-32" src="https://i.ibb.co/TvkddBR/wepik-export-20230517174602-QZb-L.png" alt="" />
      </Link>
    </div>

     {/* Search bar */}
     <div className="form-control hidden md:inline-block w-1/2">
          <div className="input-group">
            <input
              type="text"
              placeholder="search toys"
              className="input  bg-base-300 w-full"
            />
            <button className="btn btn-square px-10">
              Search
            </button>
          </div>
        </div>
        
      <nav>
        <button className="btn btn-ghost"><Link to='/blog'>Blogs</Link> </button>

    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
     
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img title="" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <Link to='/'>
            <a className="justify-between">
              Profile
              {/* <span className="badge">New</span> */}
            </a>
          </Link>
          <Link to='/'><a>Add A Toy</a></Link>
          <Link to='/'><a>My Toy</a></Link>
          <Link to='/'><a>Logout</a></Link>
        </ul>
      </div>

    </div>
    </nav>
  </div>
  </div>
  <div className="row">
  <div className="px-8">
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

  </div>
  
   </div>

  </>     
    );
};

export default Header;