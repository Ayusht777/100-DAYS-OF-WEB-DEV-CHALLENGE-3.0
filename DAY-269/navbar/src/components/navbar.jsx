import { useState } from "react";
import { FiZap, FiMenu, FiX } from "react-icons/fi";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="w-full h-14 bg-gray-800 flex px-4 py-1">
        {/* logo */}
        <div className="flex items-center flex-grow">
          <FiZap className="text-white md:text-4xl text-3xl" />
        </div>
        {/* links */}
        <div className="hidden md:flex items-center flex-grow justify-end">
          <ul className="flex items-center gap-10 text-white text-xl">
            <li className="w-auto h-auto px-4 py-2 box-border rounded-xl hover:bg-gray-700">
              <a href="#">Home</a>
            </li>
            <li className="w-auto h-auto px-4 py-2 box-border rounded-xl hover:bg-gray-700">
              <a href="#">Product</a>
            </li>
            <li className="w-auto h-auto px-4 py-2 box-border rounded-xl hover:bg-gray-700">
              <a href="#">Services</a>
            </li>
            <li className="w-auto h-auto px-4 py-2 box-border rounded-xl hover:bg-gray-700">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* responsive */}
        <div className="w-auto md:hidden flex items-center justify-end">
          <button
            className="text-2xl text-white w-full flex justify-end p-2 box-border rounded-md hover:bg-gray-700"
            onClick={() => {
              setToggle(!toggle);
            }}
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            {toggle ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {toggle && (
        <div
          className="md:hidden bg-gray-700 flex flex-col justify-center items-center p-4"
        >
          <ul className="w-full text-white text-xl flex flex-col justify-center items-center gap-6 p-2">
            <li className="w-full py-2 rounded-xl text-center hover:bg-gray-800">
              <a href="#">Home</a>
            </li>
            <li className="w-full py-2 rounded-xl text-center hover:bg-gray-800">
              <a href="#">Product</a>
            </li>
            <li className="w-full py-2 rounded-xl text-center hover:bg-gray-800">
              <a href="#">Services</a>
            </li>
            <li className="w-full py-2 rounded-xl text-center hover:bg-gray-800">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};