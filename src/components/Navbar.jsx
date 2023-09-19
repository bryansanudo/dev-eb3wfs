import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "@/assets/logo.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "/companies",
      name: "Companies",
    },
    {
      id: 2,
      link: "/individuals",
      name: "Individuals",
    },
  ];

  return (
    <>
      <div className="fixed w-full sm:h-24 h-36 bg-gray-900 text-white z-20   ">
        <div className="mx-4 flex flex-col sm:flex-row justify-between items-center max-w-screen-xl  pt-6 sm:pt-0 h-full">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className=" object-cover h-16 duration-300 shadow-xl cursor-pointer shadow-thSecondary hover:scale-105"
            />
          </Link>

          <div className=" flex items-center">
            <ul className="flex ">
              {links.map(({ id, link, name }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <li className="p-4 uppercase duration-300 hover:text-red-500 hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
