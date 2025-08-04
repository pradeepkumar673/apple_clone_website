import React, { useState } from "react";
import mainImage from "../assets/others.png"; // Your uploaded image

const items = [
  {
    title: "iPhone and Mac",
    content:
      "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages on your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
  },
  {
    title: "iPhone and Apple Watch",
    content:
      "Stay connected to your iPhone even when it’s in your pocket. With Apple Watch, you can get notifications, take calls, and respond to messages right from your wrist.",
  },
  {
    title: "iPhone and AirPods",
    content:
      "Automatically connect your AirPods when you start a call or play music on your iPhone. Seamless switching between devices keeps your audio experience smooth.",
  },
];

const SignificantOthers = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f9f9f9] py-10 px-4 md:px-16">
      <h2 className="text-3xl font-semibold mb-8">Significant others.</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side Accordion */}
        <div className="flex-1 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => setOpenIndex(index)}
                className="text-lg font-medium flex justify-between w-full"
              >
                {item.title}
                <span>{openIndex === index ? "▴" : "▾"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-700">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <img
            src={mainImage}
            alt="Devices"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SignificantOthers;
