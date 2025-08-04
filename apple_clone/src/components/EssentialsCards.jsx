import React from "react";
import bg1 from "../assets/bg.1.png";
import bg2 from "../assets/bg.2.png";

const essentials = [
    {
        title: "iPhone accessories",
        desc: "Explore colourful cases, USB-C power adapters, MagSafe accessories and more.",
        link: "Shop iPhone accessories ›",
        bg: bg1,
    },
    {
        title: "AirTag",
        desc: "Attach one to your keys. Put another in your backpack. If they're misplaced, just use the Find My app.",
        link: "Buy ›",
        bg: bg2,
    },
];

const EssentialsCards = () => {
    return (
        <div className="w-full px-4 py-10 bg-white">
            <h2 className="text-3xl font-semibold ml-5 mb-6">iPhone essentials.</h2>

            <div className="flex m-6  gap-3 md:overflow-visible ">
                {essentials.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px] md:w-1/2 rounded-2xl hover:scale-105 transition ease-in-out duration-300 p-6 bg-cover h-[500px] bg-center text-black shadow-md"
                        style={{ backgroundImage: `url(${item.bg})` }}
                    >
                        <div className="flex flex-col h-1/4 backdrop-blur-md items-center justify-top">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm mb-4">{item.desc}</p>
                            <a href="#" className="text-blue-500 font-medium text-sm hover:underline">
                                {item.link}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EssentialsCards;
