import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';

const Holders = () => {
  return (
    <div className="container mx-auto px-4 text-white sm:mt-32 mt-10">
      <h1 className="sm:text-5xl text-4xl lg:w-3/4 w-full mb-10">
        Developed for Holders,
        <br /> Traders, and Innovators
      </h1>

      <div className="flex sm:flex-row flex-col-reverse items-start justify-between lg:w-[80%] w-full mx-auto">
        <div className="flex sm:w-1/2 w-full lg:ml-10 ml-0 lg:mr-0 mr-5">
        <div className="w-16 mr-4 rounded-t-full backdrop-blur-lg  bg-gradient-to-b from-gray-100/40 to-transparent"></div>
        <div className="flex flex-col">
        <h1 className="text-2xl mb-5">Traders and Institutions</h1>
        <p className="text-lg font-light">
          ZeroOne offers traders stability through its Bitcoin reserve system,
          ensuring long-term value while reducing risk. ZeroOne’s transparent
          reserves and structured governance make it a reliable choice for
          institutions looking to engage with decentralized finance
        </p>
        </div>
        </div>

        <div className="backdrop-blur-lg  bg-gradient-to-b from-gray-100/40 to-transparent  sm:w-[300px] max-w-[98%] sm:h-80 p-10 rounded">
          <img className="w-full rounded" src={img3} alt="img3" />
        </div>
      </div>

      <div className="flex sm:flex-row-reverse flex-col-reverse items-start justify-between lg:w-[80%] w-full mx-auto mt-10">
        <div className="flex sm:w-1/2 w-full lg:ml-10 ml-0 lg:mr-0 mr-5">
        <div className="w-20 mr-4 rounded-t-full backdrop-blur-lg  bg-gradient-to-b from-gray-100/40 to-transparent"></div>
        <div className="flex flex-col">
        <h1 className="text-2xl mb-5">IBacked By Bitcoin</h1>
        <p className="text-lg font-light">
        Monthly Bitcoin Purchases: Starting 1 month after launch, 2% of the coins held by the project team (30% of total supply) will be used to purchase Bitcoin each month until all but 5% of reserve coins are left. These purchases will tie ZeroOne’s ecosystem to Bitcoin, creating intrinsic value, and enhancing stability as the project grows. Bitcoin reserves will be used for liquidity or any major drops in value.
        </p>
        </div>
        </div>

        <div className="backdrop-blur-lg  bg-gradient-to-b from-gray-100/40 to-transparent  w-[300px] h-80 p-10 rounded">
          <img className="w-full rounded" src={img4} alt="img4" />
        </div>
      </div>
    </div>
  );
};

export default Holders;
