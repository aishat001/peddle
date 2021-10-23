/* eslint-disable */
import React from "react";
import peddleLogo from '../assets/PEDDLE.png'


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
      <nav className="relative flex items-center justify-between px-5 md:px-20 py-3 mb-3 fixed bg-white dark:bg-primary">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold font-ranchers logo-color leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#home"
            >                    <img src={peddleLogo} alt="logo"/>
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-dark rounded bg-dark block lg:hidden outline focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <MenuAlt3Icon/> */}
            </button>
          </div>
          <div
            className={
              "flex-col items-start lg:flex-row lg:flex flex-grow lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-grey">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#about"
                >About</a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#projects"
                >Works</a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#contact"
                >Contact </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#about"
                >Sign-in</a>
              </li>
              <li className="nav-item">
              <button type="button" className="border text-lemon btn-border-color font-semibold px-6 py-2 rounded-sm mr-3  bg-btn-hover">Sign Up</button>
              </li>

            </ul>
          </div>


        </div>
      </nav>
  );
}