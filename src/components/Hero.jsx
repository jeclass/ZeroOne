import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../assets/logo.webp";

const Hero = () => {
  return (
    <section className="text-white relative container px-4 sm:px-8 mx-auto flex sm:flex-row flex-col items-center justify-between pt-4 sm:pt-14">
      <div className="flex flex-col w-full sm:w-2/3">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-start">DO MORE WITH YOUR CRYPTO</h1>
      <p className="text-2xl text-center sm:text-start font-thin mt-4 sm:w-5/6">
        We encourage active traders to purchase small amounts and hold for long term value.
      </p>  
      <div className="m-5 bg-gradient-to-r from-purple-500 to-blue-500 p-2 w-fit flex items-center justify-center rounded-full text-3xl"><MdOutlineArrowOutward /></div>
      </div>

        <div className="backdrop-blur-lg  bg-gradient-to-b from-gray-100/40 to-transparent sm:w-2/5 w-3/4 p-10 rounded-t-full">
        <img
          src={logo}
          alt="logo"
        />
        </div>
    </section>
  );
};

export default Hero;
