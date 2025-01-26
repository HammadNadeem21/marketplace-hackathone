import React from "react";

// Icons
import { AiFillHome } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { RiPriceTag2Fill } from "react-icons/ri";
import { LuMessageSquareMore } from "react-icons/lu";
import { BiSolidCalendar } from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

// Components
// Switch button
import { SwitchDemo } from "@/components/Switch";
import { SelectAdmin } from "@/components/SelectAdmin";
import { Component } from "@/components/chart";
import Navbar from "@/components/Navbar";
import MobileAdmin from "@/components/MobileAdmin";
import Footer from "@/components/Footer";

// Image
import Image from "next/image";
import Maps from "../../../public/Admin/Maps.png";
import View1 from "../../../public/Admin/View1.png";
import NissanGtR1 from "../../../public/Admin/NissanGtR1.png";
import first from "../../../public/Admin/first.png";
import crv from "../../../public/Admin/crv.png";
import rollsRoyal from "../../../public/Admin/rollsRoyal.png";

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

// const getData = async () => {

//   return response
// }

const Admin = async () => {



  const fetchData = await fetch(
    "https://sanity-nextjs-application.vercel.app/api/hackathon/template7"
  );
  const response = await fetchData.json();

  
  console.log(response);

  return (
    <div>
      {/* Mobile Sidebar (Start) */}
      <div className="lg:hidden block z-50 left-[40px] bg-white">
        <MobileAdmin />
      </div>
      {/* Mobile Sidebar (End) */}
      {/* Navbar */}
      <Navbar />

      {/* <NavbarAdmin/> */}

      <div className="grid lg:grid-cols-[25%,75%] grid-cols-1">
        {/* Sidebar (Start) */}
        <div className="bg-white py-6 px-8 lg:block hidden">
          <div className="w-[240px] h-[750px] ">
            <h1
              className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66]`}
            >
              M A I N M E N U
            </h1>

            {/* Dashboard */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <AiFillHome
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Dashboard
              </h1>
            </div>

            {/* Car-Rent */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <FaCarAlt
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Car Rent
              </h1>
            </div>

            {/* Insight */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <MdSignalCellularAlt
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Insight
              </h1>
            </div>

            {/* Reimburse */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <RiPriceTag2Fill
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Reimburse
              </h1>
            </div>

            {/*Inbox */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <LuMessageSquareMore
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Inbox
              </h1>
            </div>

            {/* Calender */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <BiSolidCalendar
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Calender
              </h1>
            </div>

            <h1
              className={`${PlusJakartaSans600.className} text-[12px] text-[#94A7CB66] mt-5`}
            >
              P R E F E R E N C E S
            </h1>

            {/* Setting */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <RiSettingsFill
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Setting
              </h1>
            </div>

            {/*Help & Center */}
            <div className="w-[200px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <MdErrorOutline
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Help & Center
              </h1>
            </div>

            {/* Dark Mode */}
            <div className="w-[150px] h-[45px] flex items-center mt-5 rounded-[10px] cursor-pointer group hover:bg-[#3563E9]">
              <CgDarkMode
                size={24}
                className="text-[#90A3BF] ml-3 group-hover:text-white"
              />
              <h1
                className={`${PlusJakartaSans500.className} text-[16px] text-[#90A3BF] ml-3 group-hover:text-white`}
              >
                Dark Mode
              </h1>
            </div>

            <div className="ml-[160px] mt-[-30px]">
              <SwitchDemo />
            </div>
          </div>
        </div>
        {/* Sidebar (End) */}

        {/* Detail Rental Card */}

        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="h- py-[13px] px-5">
            <div className="w-full h-auto bg-white rounded-[10px] px-[15px] py-[10px]">
              <div className="w-full h-[760px] ">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Details Rental
                </h1>

                {/* Map Picture */}
                <Image
                  src={Maps}
                  alt="Maps"
                  height={300}
                  width={300}
                  className="w-full h-[272px] mt-4 rounded-[10px]"
                />

                {/* Car Name */}
                <div className="w-full h-[68px] mt-[30px] grid grid-cols-[60%,40%]">
                  <div className=" flex justify-between">
                    <Image
                      src={View1}
                      alt="car"
                      height={300}
                      width={300}
                      className="w-[92px] h-[68px]"
                    />

                    <div className=" py-2">
                      <h1
                        className={`${PlusJakartaSans700.className} xs:text-[20px] text-[17px] text-[#1A202C]`}
                      >
                        Nissan GT - R
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[#1A202C] xs:text-[12px] text-[10px]`}
                      >
                        Sport Car
                      </h2>
                    </div>
                  </div>
                  <div className="text-right">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[14px] text-[#3D5278] mt-1`}
                    >
                      #9761
                    </h2>
                  </div>
                </div>

                {/* Pick up & Drop off */}

                <div className="mt-6">
                  <input type="radio" name="pick" id="pick" />
                  <label
                    htmlFor="pick"
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-3`}
                  >
                    Pick - Up
                  </label>
                </div>

                <div className="w-full h-[48px] gap-2 mt-3 grid grid-cols-3">
                  <div className="border-[#C3D4E9] border-r-2">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>
                    <SelectAdmin name="Karachi" opt1="Lahore" opt2="Quetta" />
                  </div>

                  <div className="">
                    <div className="border-[#C3D4E9] border-r-2">
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Date
                      </h1>
                      <SelectAdmin
                        name="10 Dec 2024"
                        opt1="11 Dec 2024"
                        opt2="17 Dec 2024"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Time
                      </h1>
                      <SelectAdmin name="07:00" opt1="12:00" opt2="04:00" />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <input type="radio" name="pick" id="drop" />
                  <label
                    htmlFor="drop"
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-3`}
                  >
                    Drop - Off
                  </label>
                </div>

                <div className="w-full h-[48px] gap-2 mt-3 grid grid-cols-3">
                  <div className="border-[#C3D4E9] border-r-2">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>
                    <SelectAdmin name="Karachi" opt1="Lahore" opt2="Quetta" />
                  </div>

                  <div className="">
                    <div className="border-[#C3D4E9] border-r-2">
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Date
                      </h1>
                      <SelectAdmin
                        name="10 Dec 2024"
                        opt1="11 Dec 2024"
                        opt2="17 Dec 2024"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Time
                      </h1>
                      <SelectAdmin name="07:00" opt1="12:00" opt2="04:00" />
                    </div>
                  </div>
                </div>

                <div className="h-[2px] w-full bg-[#C3D4E966] mt-8"></div>

                <div className="w-full h-[48px]  mt-8 flex">
                  <div className="w-[70%] ">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[18px] text-[#1A202C]`}
                    >
                      Total Rental Price
                    </h1>
                    <h2
                      className={`${PlusJakartaSans500.className} text-[13px] text-[#90A3BF]`}
                    >
                      Overall price and includes rental discount
                    </h2>
                  </div>
                  <div className="w-[30%] ">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[30px] text-[#1A202C]`}
                    >
                      $80.00
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* chart */}
          <div className=" py-[13px] px-5">
            <div className="rounded-[10px] px-[15px] pt-[10px] h-auto bg-white">
              <h1
                className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
              >
                Top 5 Car Rental
              </h1>

              {/* Chart */}
              <div className="w-full grid xs:grid-cols-2 grid-cols-1">
                <div className="flex justify-center">
                  <Component />
                </div>

                <div className="w-full h-[220px]  mt-4">
                  {/* Sport Car */}
                  <div className="w-full h-1/5 flex justify-between items-center">
                    <div className="flex gap-1">
                      <div className="h-[15px] w-[15px] mt-[3px] bg-[#0D3559] rounded-full"></div>
                      <h1
                        className={`${PlusJakartaSans600.className} text-[14px] text-[#90A3BF] ml-2`}
                      >
                        Sports Cars
                      </h1>
                    </div>

                    <h2
                      className={`${PlusJakartaSans600.className} text-[14px] text-[#1A202C] ml-[60px]`}
                    >
                      17,439
                    </h2>
                  </div>

                  {/* SUV */}
                  <div className="w-full h-1/5  flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="h-[15px] w-[15px] mt-[3px] bg-[#175D9C] rounded-full"></div>
                      <h1
                        className={`${PlusJakartaSans600.className} text-[14px] text-[#90A3BF] ml-2`}
                      >
                        SUV
                      </h1>
                    </div>

                    <h2
                      className={`${PlusJakartaSans600.className} text-[14px] text-[#1A202C] ml-[115px]`}
                    >
                      9,478
                    </h2>
                  </div>

                  {/* Coupe */}
                  <div className="w-full h-1/5  flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="h-[15px] w-[15px] mt-[3px] bg-[#2185DE] rounded-full"></div>
                      <h1
                        className={`${PlusJakartaSans600.className} text-[14px] text-[#90A3BF] ml-2`}
                      >
                        Coupe
                      </h1>
                    </div>

                    <h2
                      className={`${PlusJakartaSans600.className} text-[14px] text-[#1A202C] ml-[95px]`}
                    >
                      18,197
                    </h2>
                  </div>

                  {/* Hatchback */}
                  <div className="w-full h-1/5  flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="h-[15px] w-[15px] mt-[3px] bg-[#63A9E8] rounded-full"></div>
                      <h1
                        className={`${PlusJakartaSans600.className} text-[14px] text-[#90A3BF] ml-2`}
                      >
                        Hatchback
                      </h1>
                    </div>

                    <h2
                      className={`${PlusJakartaSans600.className} text-[14px] text-[#1A202C] ml-[65px]`}
                    >
                      12,510
                    </h2>
                  </div>

                  {/* MPV */}
                  <div className="w-full h-1/5  flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="h-[15px] w-[15px] mt-[3px] bg-[#A6CEF2] rounded-full"></div>
                      <h1
                        className={`${PlusJakartaSans600.className} text-[14px] text-[#90A3BF] ml-2`}
                      >
                        MPV
                      </h1>
                    </div>

                    <h2
                      className={`${PlusJakartaSans600.className} text-[14px] text-[#1A202C] ml-[105px]`}
                    >
                      14,406
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transaction (Start) */}

            <div className="w-full h-auto bg-white rounded-[10px] px-[15px] mt-[30px] py-5">
              <h1
                className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
              >
                Recent Transaction
              </h1>

              <div className="w-full h-[356px] mt-4">
                {/* Car 1 */}
                <div className="w-full h-1/4 xl:flex justify-between grid xs:grid-cols-2 grid-cols-[70%,30%] border-[#C3D4E966] border-b-2">
                  {/* Car name */}
                  <div className=" flex justify-between items-center">
                    <Image
                      src={NissanGtR1}
                      alt="Nissan"
                      height={300}
                      width={300}
                      className="h-[40px] w-[112px]"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Nissan Gt - R
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF] mt-1`}
                      >
                        Sport Car
                      </h2>
                    </div>
                  </div>

                  {/* Car price */}
                  <div className="text-right py-5">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF]`}
                    >
                      20 July
                    </h2>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C] mt-1`}
                    >
                      $80.00
                    </h1>
                  </div>
                </div>

                {/* Car 2 */}

                <div className="w-full h-1/4 xl:flex justify-between grid xs:grid-cols-2 grid-cols-[70%,30%] border-[#C3D4E966] border-b-2">
                  {/* Car name */}
                  <div className="flex justify-between items-center">
                    <Image
                      src={first}
                      alt="Koegnigsegg"
                      height={300}
                      width={300}
                      className="h-[40px] w-[112px]"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Koegnigsegg
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF] mt-1`}
                      >
                        Sport Car
                      </h2>
                    </div>
                  </div>

                  {/* Car price */}
                  <div className="py-5 text-right">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF]`}
                    >
                      19 July
                    </h2>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C] mt-1`}
                    >
                      $99.00
                    </h1>
                  </div>
                </div>

                {/* Car 3 */}

                <div className="w-full h-1/4 xl:flex justify-between grid xs:grid-cols-2 grid-cols-[70%,30%] border-[#C3D4E966] border-b-2">
                  {/* Car name */}
                  <div className="flex justify-between items-center">
                    <Image
                      src={rollsRoyal}
                      alt="Rolls - Royce"
                      height={300}
                      width={300}
                      className="h-[40px] w-[112px]"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        Rolls - Royce
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF] mt-1`}
                      >
                        Sport Car
                      </h2>
                    </div>
                  </div>

                  {/* Car price */}
                  <div className="py-5 text-right">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF]`}
                    >
                      18 July
                    </h2>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C] mt-1`}
                    >
                      $96.00
                    </h1>
                  </div>
                </div>

                {/* Car - 4 */}
                <div className="w-full h-1/4 xl:flex justify-between grid xs:grid-cols-2 grid-cols-[70%,30%]">
                  {/* Car name */}
                  <div className="flex justify-between items-center">
                    <Image
                      src={crv}
                      alt="CR - V"
                      height={300}
                      width={300}
                      className="h-[40px] w-[112px]"
                    />
                    <div>
                      <h1
                        className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                      >
                        CR - V
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF] mt-1`}
                      >
                        SUV
                      </h2>
                    </div>
                  </div>

                  {/* Car price */}
                  <div className="py-5 text-right">
                    <h2
                      className={`${PlusJakartaSans500.className} text-[12px] text-[#90A3BF]`}
                    >
                      17 July
                    </h2>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C] mt-1`}
                    >
                      $80.00
                    </h1>
                  </div>
                </div>
              </div>
              {/* Recent Transaction (End) */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Admin;
