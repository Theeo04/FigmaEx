import React from "react";

function FrameOne() {
  return (
    <div className="frame_one h-[50vh] xl:2xl:h-[75vh] w-full">
      <div className="flex justify-evenly space-x-[10px] xl:2xl:space-x-[200px]">
        <div className="mt-[70px] ml-[20px] xl:2xl:ml-[0px]">
          <p className="w-[300px] h-auto text-white text-[35px] font-[600] xl:2xl:w-[600px] xl:2xl:text-[45px]">
            Discover Top Tech Professionals in Minutes.
          </p>
          <p className="w-[300px] font-[300] text-[18px] tracking-[1px] text-white font-poppins text-xs pt-[15px] leading-6 xl:2xl:w-[420px]">
            Streamline Your Business Needs with Ricoz&rsquo;s All-in-One Tech
            Service Hub.
          </p>
          <button className="w-[171px] h-[55px] bg-[#0030FF] rounded-3xl text-white font-[600] mt-[20px] xl:2xl:mt-[35px]">
            Get Started
          </button>
        </div>
        <div className="mt-[-50px]">
          <img
            className="w-[260px] h-[255.48px] bg-no-repeat mt-[150px] xl:2xl:mt-[70px] bg-[#314ab9] mr-[45px] xl:2xl:w-[355px] xl:2xl:h-[324px]"
            src="unsplash_yTwXpLO5HAA.jpg"
          />
          <img
            src="pic2.jpg"
            className="hidden xl:2xl:inline w-[237px] h-[235px] ml-[-135px] mt-[-56px]"
          />
        </div>
      </div>
    </div>
  );
}

export default FrameOne;
