import React from "react";

// Image
import Image from "next/image";
import Switch from "../../public/Switch.png";

// Select components
import { SelectDemo } from "./Select";


// Font
import { Plus_Jakarta_Sans } from "next/font/google";
const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const PickUp = () => {
  return (
    <div>
      <div className="w-full xl:px-[40px] lg:pl-[60px] md:pl-[70px] px-5 grid xl:grid-cols-[1fr,100px,1fr] lg:grid-cols-[1fr,100px,1fr] md:grid-cols-[1fr,80px,1fr] grid-cols-1 py-7 mt-0">
        <div className="bg-white xl:w-full lg:w-[90%] md:w-[85%] h-[132px] rounded-lg text-[100%] lg:text-[70%]">
          <div className="px-8 py-3">
            <input type="radio" id="pick" />
            <label htmlFor="pick" className="ml-2 text-base">
              Pick-Up
            </label>

            <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr]">
              <div className=" border-[#C3D4E9] border-r-2 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Locations
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Your City" opt1="Karachi" opt2="Lahore" opt3="Quetta" opt4="Islamabad" opt5="Faislabad"/>
                </div>
              </div>

              <div className=" border-[#C3D4E9] border-r-2 ml-3 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Date
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Data" opt1="6" opt2="12" opt3="18" opt4="24" opt5="30"/>
                </div>
              </div>
              <div className="ml-2 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Time
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Time" opt1="8:00 AM" opt2="12:00 PM" opt3="4:00 PM" opt4="8:00 PM" opt5="12:00 AM"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[132px] md:px-0 flex justify-center">
          <Image
            src={Switch}
            alt="swip"
            className="md:mt-8 xl:ml-0 lg:ml-[-25px] md:ml-[-30px] mt-3 cursor-pointer"
          />
        </div>

        <div className="rounded-lg bg-white h-[132px] xl:w-full lg:w-[90%] md:w-[85%] text-[100%] lg:text-[70%]">
          <div className="px-8 py-3">
            <input type="radio" id="drop"/>
            <label htmlFor="drop" className="ml-2 text-base">
              Drop-Off
            </label>

            <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr]">
              <div className=" border-[#C3D4E9] border-r-2 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Locations
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Your City" opt1="Karachi" opt2="Lahore" opt3="Quetta" opt4="Islamabad" opt5="Faislabad"/>
                </div>
              </div>

              <div className=" border-[#C3D4E9] border-r-2 ml-3 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Date
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Data" opt1="6" opt2="12" opt3="18" opt4="24" opt5="30"/>
                </div>
              </div>
              <div className="ml-2 mt-3">
                <h1
                  className={`${PlusJakartaSans.className} text-[16px] text-[#1A202C]`}
                >
                  Time
                </h1>

                <div className="w-126px h-[25px] mt-3">
                  <SelectDemo name="Select Time" opt1="8:00 AM" opt2="12:00 PM" opt3="4:00 PM" opt4="8:00 PM" opt5="12:00 AM"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUp;
