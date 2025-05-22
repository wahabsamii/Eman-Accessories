import React from "react";
import './main.css'
const HomeSectionThird = () => {
  return (
    <section className="w-full flex items-center  home-section-third pt-14 pb-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left pt-8 pb-8">
          <h2 className="text-4xl font-bold text-black">METRÓPOLIS</h2>
          <div className="w-10 h-[2px] bg-black my-4 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mb-6">
            Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
            lacus meleifend menean diverra loremous.
          </p>
          <button className="bg-black text-white px-6 py-3 font-bold">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThird;
