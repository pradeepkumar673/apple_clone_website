import React, { useRef } from "react";

// Importing all 6 images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

function HorizontalFeatureCards() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollBy({ left: -300, behavior: "smooth" });
    else current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const cards = [
    {
      title: "Apple Intelligence",
      subtitle: "AI-opening possibilities.",
      image: img1
    },
    {
      title: "Cutting-Edge Cameras",
      subtitle: "Picture your best photos and videos.",
      image: img2
    },
    {
      title: "Chip and Battery Life",
      subtitle: "Fast that lasts.",
      image: img3
    },
    {
      title: "Innovation",
      subtitle: "Beautiful and durable, by design.",
      image: img4
    },
    {
      title: "Security & Privacy",
      subtitle: "Safe in your hands.",
      image: img5
    },
    {
      title: "iOS Experience",
      subtitle: "Intuitive and powerful.",
      image: img6
    }
  ];

  return (
    <div className="relative w-full my-8">

      <div className="relative bg-gray-50 p-8">
        <h2 className="text-3xl font-medium text-black pb-4 mb-4 ml-4">
          <span className="font-bold text-black">Get To Know The Iphone.</span>{' '}
          
        </h2>
      </div>
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full"
      >
        →
      </button>

      {/* Scrollable Card Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-6 py-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[260px] w-[260px] h-[450px] bg-cover bg-center rounded-3xl text-white flex flex-col justify-end p-4 hover:scale-105 transition duration-300 ease-in-out"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h2 className="text-sm font-medium">{card.title}</h2>
            <p className="text-2xl font-semibold leading-tight">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalFeatureCards;
