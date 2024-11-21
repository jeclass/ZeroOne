const HowToWorks = () => {
  return (
    <div className="container mx-auto px-4 text-white mt-10">
      <h1 className="text-center sm:text-5xl text-4xl">How it works ?</h1>
      <p className="mx-auto text-center sm:w-3/4 mt-4 font-thin text-lg">
        Our mission is to create a cryptocurrency that grows steadily,
        prioritizing long-term value over short-term hype. With community-driven
        governance, transparent reserves, and a commitment to sustainability,
        ZeroOne is the coin you can trust to deliver lasting success
      </p>

      <div className="grid sm:grid-cols-3 h-46 items-center justify-between gap-10 mt-10">
        <div className="flex h-full items-center flex-col backdrop-blur-lg  bg-gradient-to-r from-gray-100/30 to-transparent p-4">
          <h2 className="text-3xl mb-2">Receiving</h2>
          <p>
            ZeroOne tokens can be acquired through decentralized exchanges and
            held securely in your wallet.
          </p>
        </div>
        <div className="flex h-full items-center flex-col backdrop-blur-lg  bg-gradient-to-r from-gray-100/30 to-transparent p-4">
          <h2 className="text-3xl mb-2">Bitcoin Conversion</h2>{" "}
          <p>
          Every month, 2% of ZeroOne reserves are converted into Bitcoin to build a trusted asset reserve.
          </p>
        </div>
        <div className="flex h-full items-center flex-col backdrop-blur-lg  bg-gradient-to-r from-gray-100/30 to-transparent p-4">
          <h2 className="text-3xl mb-2">Community Votes</h2>{" "}
          <p>
            Token holders vote on how Bitcoin reserves are used, combining
            influence with inclusivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToWorks;
