"use client"
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { SliderDemo } from "@/components/Slider";



// Font
import { Plus_Jakarta_Sans } from "next/font/google";


const PlusJakartaSans700 = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});
const PlusJakartaSans500 = Plus_Jakarta_Sans({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
});
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});



const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Toggle Button */}
      <div
        onClick={toggleSidebar}
        className="sticky ml-[50px] text-[#90A3BF] z-50 p-2 rounded-md cursor-pointer"
      >
        {isOpen ? <IoIosCloseCircle size={30}/> : <IoMenu size={30}/>}
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 mt-8">
         

          {/* Sidebar Content */}
          <div className="w-full mt-5 z-50">
            <div className="bg-white h-full py-5 px-3">
              <div className="w-[176px] h-[302px] ml-5">
                <h1 className="text-[12px] text-[#90A3BF] font-semibold">TYPE</h1>
                <div className="mt-3">
                  {[
                    "Sport",
                    "SUV",
                    "MPV",
                    "Sedan",
                    "Coupe",
                    "Hatchback",
                  ].map((type, index) => (
                    <div key={index} className="mt-3">
                      <input type="checkbox" id={type} />
                      <label
                        htmlFor={type}
                        className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[176px] h-[212px] ml-5 mt-0">
                <h1 className="text-[12px] text-[#90A3BF] font-semibold">CAPACITY</h1>
                <div className="mt-3">
                  {[
                    "2 Person",
                    "4 Person",
                    "6 Person",
                    "8 or More",
                  ].map((capacity, index) => (
                    <div key={index} className="mt-3">
                      <input type="checkbox" id={capacity} />
                      <label
                        htmlFor={capacity}
                        className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                      >
                        {capacity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ml-5 mt-5">
                <h1 className="text-[12px] text-[#90A3BF] font-semibold">PRICE</h1>
                <div className="mt-4">
                  {/* SliderDemo */}
                  <SliderDemo/>
                </div>
                <h2 className="text-[12px] text-black mt-4">Max. $100.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
