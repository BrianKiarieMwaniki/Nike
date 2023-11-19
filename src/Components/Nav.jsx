import { headerLogo } from "../assets/images";
import { clear, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showDropdownNav, setShowDropdownNav] = useState(false);

  const handleShowDropdownNav = () => {
    console.log(`show dropdown nav: ${showDropdownNav}`);
    setShowDropdownNav(!showDropdownNav);
  };
  return (
    <header className={`absolute z-50 w-full py-8 padding-x max-lg:bg-white `}>
      <nav
        className={`flex items-center justify-between max-container
         ${showDropdownNav && "flex-wrap"}`}
      >
        <div className="flex justify-between max-lg:w-full">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>

          <div
            className={`hidden max-lg:block ml-auto`}
            onClick={handleShowDropdownNav}
          >
            {showDropdownNav ? (
              <img src={clear} alt="Hamburger" width={25} height={25} />
            ) : (
              <img src={hamburger} alt="Hamburger" width={25} height={25} />
            )}
          </div>
        </div>

        <ul
          className={`flex flex-row items-center justify-center flex-1 gap-16 transition-all duration-500 ease-in 
        ${
          showDropdownNav
            ? " max-lg:flex-col order-3 self-end w-full flex-grow max-lg:bg-white max-lg:gap-5 max-lg:items-start max-lg:mt-4 max-lg:px-4 max-lg:text-black"
            : "max-lg:hidden"
        }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="text-lg leading-normal font-montserrart text-slate-gray hover:text-coral-red"
                onClick={()=> (setShowDropdownNav(false))}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
