import React from 'react';
import { FaClock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
      <footer className='divide-y  text-gray-800'>
                
        <div className='py-6 text-sm text-center text-yellow-50 bg-black'>

        <div className="grid-rows-4 flex justify-evenly my-container lg:flex-row sm:flex-col">
        <div className="text-3xl font-bold tracking-wide text-center ">
          RannaGhor <br /><br />
          <div className="text-xs font-normal">Food for the body is not enough. <br /> There must  be food for the soul.</div>
        </div>

        <div className="text-3xl font-bold tracking-wide text-center">
          Main Menu <br /><br />
          <div className="text-xs font-normal py-2"> <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink></div>
          <div className="text-xs font-normal py-2">
          <NavLink
              to="/recipies"
              aria-label="recipies"
              title="recipies"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Recipies
            </NavLink>
          </div>
          <div className="text-xs font-normal">
          <NavLink
              to="/blog"
              aria-label="blog"
              title="blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </div>
        </div>

        <div className="text-3xl font-bold tracking-wide text-center">
          Information <br /><br />
          <div className="text-xs font-normal py-2">Contact</div>
          <div className="text-xs font-normal py-2">Orders & Returns</div>
          <div className="text-xs font-normal">Resrvation</div>
        </div>

        <div className="text-3xl font-bold tracking-wide text-center">
          Address <br /><br />
          <div className="text-xs font-normal py-2">2445, Khulshi</div>
          <div className="text-xs font-normal py-2">Chittagong</div>
          <div className="text-xs font-normal flex ms-2 text-center sm:ms-48 lg:ms-0 "><FaClock></FaClock> <span className="px-2">9.00 am -11.00 pm</span> </div>
        </div>

        
      </div>



          © 2023 RannaGhor Included All rights reserved.
        </div>
        
      </footer>
    )
  }
  
  export default Footer
  