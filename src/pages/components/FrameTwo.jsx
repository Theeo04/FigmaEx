import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function FrameTwo() {
  const data = [
    {
      src: "laptop.jpg",
      title: "Wide Range of Services",
      content:
        "Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services",
    },
    {
      src: "magnifyingglass.jpg",
      title: "Instant Search",
      content:
        "Get connected to top tech professionals within moments. Our intuitive search function ensures quick access.",
    },
    {
      src: "briefcase.jpg",
      title: "Instant Search",
      content:
        "We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals.",
    },
    {
      src: "compass.jpg",
      title: " Integrated Tools",
      content:
        "Enhance collaboration with built-in tools. Our platform integrates messaging, CRM, and calendars for seamless communication.",
    },
    {
      src: "trophy.jpg",
      title: " Refer and Earn",
      content:
        "Spread the word and be rewarded. Invite others to join, and both you and your referrals can enjoy the benefits of our refer-and-earn.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(data.length - 3, startIndex + 1));
  };

  const visibleItems = data.slice(startIndex, startIndex + 3);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mt-5 mb-5">
        <h1 className="text-gray-700 font-semibold text-[20px] lg:2xl:text-[35px] lg:2xl:ml-[80px] font-raleway capitalize">
          Explore Our Platform&rsquo;s Unique Features
        </h1>
        <div className="flex justify-between space-x-10 items-center mb-6 ">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <BsArrowLeftCircleFill className="text-[30px]" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex === data.length - 3}
          >
            <BsArrowRightCircleFill className="text-[30px]" />
          </button>
        </div>
      </div>

      <div className="flex justify-evenly space-x-2 lg:space-x-5 overflow-hidden">
        {visibleItems.map((item, index) => (
          <div
            className="w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] xl:w-[350px] xl:h-[350px] bg-[#17245B] rounded-2xl"
            key={index}
          >
            <img
              src={item.src}
              alt={item.title}
              className="rounded-xl mt-[10px] ml-[10px] mb-[10px] w-[30px] h-[30px] lg:h-[45px] lg:w-[45px] bg-white lg:ml-[20px] lg:mt-[20px]"
            />

            <h2 className="ml-[10px] lg:ml-[20px] text-[17px] lg:text-[26px] font-semibold text-white font-raleway capitalize">
              {item.title}
            </h2>

            <div className="w-[200px] lg:w-[300px] xl:w-[320px]">
              <p className="ml-[10px] lg:ml-[20px] lg:text-[25px] text-white font-light text-[16px] font-poppins mt-3">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameTwo;
