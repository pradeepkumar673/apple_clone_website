import React, { useRef } from "react";

const cardData = [
  {
    title: "Save with Apple Trade In.",
    description:
      "Get ₹2000–₹5995 in credit towards iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.*",
    icon: "📱",
  },
  {
    title: "Financing.",
    description: "Monthly payment options available.",
    icon: "💳",
  },
  {
    title: "Fast, free delivery",
    description: "Or pick up available items at an Apple Store.",
    icon: "🚚",
  },
  {
    title: "Get to know your new iPhone.",
    description:
      "Learn how to get the most out of your new iPhone with a free one-to-one Personal Session.",
    icon: "👥",
  },
  {
    title: "Explore a shopping experience designed around you.",
    description: "When you shop in the Apple Store app.",
    icon: "🛍️",
  },
];

const BestPlaceToBuy = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f9f9fa] py-10 px-4 m-5">
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
          Why Apple is the best <br className="sm:hidden" />
          place to buy iPhone.
        </h1>

        {/* Left and Right Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block z-50"
          onClick={() => scroll("left")}
        >
          ←
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hidden md:block z-50"
          onClick={() => scroll("right")}
        >
          →
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-2 snap-x snap-mandatory py-10"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] bg-white rounded-xl p-6 snap-center shadow-md hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{card.description}</p>
              <div className="mt-4 text-right text-2xl">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPlaceToBuy;
