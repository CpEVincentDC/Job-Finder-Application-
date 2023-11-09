import React from "react";

// Imported images
import simple from "../../assets/logo (1).jpg";
import simple1 from "../../assets/logo (4).png";
import simple2 from "../../assets/logo (7).png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        {/* Value Container */}
        <div className="singleGrid rounded-[10px] hover:bg-[#60f3a7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#b3f7cf] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of beholder.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#95e6dd] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f1f1f0] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple1} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Artistic
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Beauty is in the soul of a human.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#e9aecb] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eb6ceb] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Wonders
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            The beauty of wonders is inside of your mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
