import React from "react";
import bannerImg from "../assets/closer-look.png"; // Replace with your actual image path or URL

const CloserLookBanner = () => {
  return (
    <section className="w-full bg-[#f9f9fa] py-10 px-4">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-6">
        Take a closer look.
      </h1>

      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <img
          src={bannerImg}
          alt="Guided Tour"
          className="w-full object-cover"
        />

        <div className="absolute p-5 bg-black bg-opacity-50 m-5 rounded-2xl backdrop-blur-sm flex flex-col justify-end bottom-1 left-6 top-1/2 -translate-y-1/2 text-white">
          <h2 className="text-xl sm:text-2xl font-semibold">
            A Guided Tour of <br /> iPhone 16 and iPhone 16 Pro
          </h2>
          <button className="mt-4 px-5 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Watch the film
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloserLookBanner;
