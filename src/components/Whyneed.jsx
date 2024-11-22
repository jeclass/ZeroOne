import { MdOutlineArrowOutward } from "react-icons/md";
import zeroOne from "../assets/zeroOne.webp";
import img1 from "../assets/img1.webp";

const Whyneed = () => {
  return (
    <section>
      <div className="container mx-auto flex sm:flex-row flex-col items-center sm:mt-20 mt-10 px-8">
        <div className="text-white ">
          <h1 className="sm:text-5xl text-4xl mb-4">Why ZeroOne?</h1>
          <p className="sm:text-2xl text-xl font-thin">
          ZeroOne bridges the gap between innovation and security in cryptocurrency. With Bitcoin reserves backing the ecosystem and decisions led by community votes, ZeroOne is a coin designed for holders who value transparency and stability.
          </p>
        </div>
        <div className="m-5 translate-x-10 relative z-30 bg-gradient-to-r from-purple-500 to-blue-500 p-2 w-fit flex items-center justify-center rounded-full text-3xl text-white">
          <MdOutlineArrowOutward />
        </div>
        <div className="backdrop-blur-lg  bg-gradient-to-b from-transparent to-gray-100/40  max-w-80 max-h-80 p-10 rounded-b-full">
          <img className="w-full h-full rounded-full" src={zeroOne} alt="zeroOne" />
        </div>
      </div>

      <div className="sm:w-5/6 w-[98%] md:w-[98%] sm:flex-row flex-col sm:h-96 container mx-auto sm:mt-20 mt-10 backdrop-blur-lg  bg-gradient-to-b from-gray-100/20 to-transparent xl:p-16 sm:p-8 p-4 flex items-center justify-between">
        <img className="sm:h-full sm:mr-4 mr-0" src={img1} alt="img1" />

        <p className="sm:w-[70%] sm:mt-0 mt-4 w-full text-2xl text-white font-light">
        Purchasing: For purchasing ZeroOne, create a phantom wallet, buy Solana and send it to your wallet, Connect it to Dex Screener, Raydium, or Jupiter, and then simply swap Solana for $ZERO1.
          <span className="m-5 translate-x-10 relative z-30 bg-gradient-to-r from-purple-500 to-blue-500 p-2 w-fit flex items-center justify-center rounded-full text-3xl text-white">
            <MdOutlineArrowOutward />
          </span>
        </p>
      </div>

      <div className="sm:w-5/6 w-[98%] md:w-[98%] xl:p-16 sm:p-8 p-4 sm:h-96 container mx-auto mt-10 backdrop-blur-lg  bg-gradient-to-b from-gray-100/20 to-transparent flex flex-row-reverse items-center justify-between">

        <p className="w-full text-2xl text-white font-light">
        Our multiple member team has dedicated many weeks to the creation of this coin and its governance, we expect this coin to achieve high market value, enabling us to start purchasing bitcoin reserves and enhancing the community on a large scale. We are working on getting our initial 30% to a public wallet for full transparency, and initiate bitcoin reserve purchases each month in increments of 2%.
          <span className="m-5 translate-x-10 relative z-30 bg-gradient-to-r from-purple-500 to-blue-500 p-2 w-fit flex items-center justify-center rounded-full text-3xl text-white">
            <MdOutlineArrowOutward />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Whyneed;
