import React from "react";
import familyImg from "../assets/Family.png"; // Adjust path if needed

const FamilyFeature = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl ">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <img
          src={familyImg}
          alt="Designed for families"
          className="w-full max-w-3xl rounded-xl mb-6"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Designed for families.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Stay connected, set limits, share purchases and more — with family features built into iPhone.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default FamilyFeature;
