import { useState } from "react";
import { data } from "./data.jsx";
import TypeX from "./TypingEffect.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  console.log(data[0].ImagesData[0].img);
  console.log(data[1].NavItems);
  const NavItems = data[1].NavItems;
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-row flex-wrap w-full h-16 md:flex-nowrap bg-bg">
      <div className="md:w-[35%] w-[85%] h-full flex-grow box-border lg:pl-28 md:pl-20 pl-4 flex md:justify-start justify-center items-center">
        <h2 className="flex items-center justify-center w-full h-full text-sm cursor-pointer lg:text-xl md:text-lg text-text md:justify-start">
          <span>👋</span>
          {<TypeX UserText="Hi, Ayush Here!" />}
        </h2>
      </div>
      <div className="md:w-[65%] w-[15%] h-full md:hidden flex-grow box-border flex justify-center items-center text-white ">
        <button
          onClick={() => {
            setIsMenuOpen(!IsMenuOpen);
          }}
          className="pr-4 text-xl md:pr-16"
        >
          {IsMenuOpen ? (
            <FiX className="text-primary"></FiX>
          ) : (
            <FiMenu></FiMenu>
          )}
        </button>
      </div>
      <div
        className={`md:w-[65%] w-full h-auto flex justify-center items-center flex-col md:flex-row box-border bg-bg z-40`}
      >
        <ul
          className={`w-full md:h-auto h-[26rem] md:flex md:flex-row md:justify-end text-text font-semibold lg:gap-16 md:gap-11  lg:pr-28 md:pr-20 items-center  ${
            IsMenuOpen
              ? "flex justify-start flex-col gap-4 items-center text-justify py-8 px-4 border-t-2 border-b-2 border-solid border-btnH"
              : "hidden h-0 md:flex-row md:items-center md:text-base md:gap-4"
          }`}
        >
          {NavItems.map((items) => {
            return (
              <li
                className="w-full h-auto p-2 text-center rounded-md sm:w-auto md:hover:text-btnH md:focus:text-btnH md:p-0 md:hover:bg-transparent hover:bg-primary "
                key={items.PageName}
              >
                <a href={items.Link}>{items.PageName}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
