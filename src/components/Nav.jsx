import { TiThMenuOutline } from "react-icons/ti";
import logo from "../assets/logo.webp";
import { GiCrossedBones } from "react-icons/gi";
import { useEffect, useState } from "react";

const Nav = () => {
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    menuBar ? document.querySelector('body').style.overflow = "hidden" : document.querySelector('body').style.overflowY = "auto";

    window.addEventListener("resize", () => setMenuBar(() => false));
  }, [menuBar]);

  return (
    <nav className="h-32 flex items-center">
      <div className="container md:px-8 px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-14 md:w-16" src={logo} alt="logo" />
          <h2 className="ml-2 text-white font-bold text-xl md:text-2xl">
            ZeroOne
          </h2>
        </div>

        <div className="text-white text-lg md:text-xl hidden sm:flex items-center justify-center">
          <a className="ml-4" href="mailto:01zeroonecoin01@gmail.com">
            Contact Us
          </a>

          <button className="backdrop-blur-sm text-xl md:text-2xl justify-center items-center bg-gray-500/30 text-white px-6 md:py-2 py-1 rounded-full hidden sm:flex ml-5">
          Purchase
        </button>
        </div>

        <button
          onClick={() => setMenuBar(true)}
          className="sm:hidden  flex text-cyan-400 items-center justify-center text-3xl"
        >
          <TiThMenuOutline />
        </button>

        <div onClick={() => setMenuBar(false)}
          className={`${
            menuBar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } sm:hidden  transition-all duration-300 fixed top-0 left-0 w-full h-full bg-red-400 z-30`}
        ></div>

        <div
          className={`fixed top-20 ${
            menuBar ? "right-0" : "-right-full hidden"
          } sm:hidden  transition-all duration-300 z-30 bg-gray-800 w-[300px] p-8 pl-[20%] rounded-l-full`}
        >
          <button
            onClick={() => setMenuBar(false)}
            className="flex text-red-700 items-center justify-center text-3xl"
          >
            <GiCrossedBones />
          </button>

          <div className="text-white text-lg flex flex-col items-start mt-10">
            <a onClick={() => setMenuBar(false)} className="" href="/">
              What is ZeroOne?
            </a>
            <a onClick={() => setMenuBar(false)} className="mt-5" href="mailto:01zeroonecoin01@gmail.com">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
