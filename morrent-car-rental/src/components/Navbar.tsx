"use client";
// Navbar Component
import React from "react";
import { useAppSelector } from "@/app/store/hooks";

import Image from "next/image";

// Icons
// filter-Icon
import filter from "../../public/icon/filter.png";
// Search-Icon
import { CiSearch } from "react-icons/ci";
// Favourite-Icon
import { MdFavorite } from "react-icons/md";
// Notification-Icon
import { IoNotifications } from "react-icons/io5";
// Setting-Icons
import { IoMdSettings } from "react-icons/io";
// Cart Icon
import { IoMdCart } from "react-icons/io";

// Avatar Component
import { AvatarDemo } from "./Avatar";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const Navbar = () => {

  // For Cart Item 
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="bg-white w-full">
      <div className="w-full xs:h-[124px] h-[150px] border-b-[1px] border-[#C3D4E966] flex pt-[40px] xs:px-[50px] pl-[40px]">
        <div className="md:w-[60%] xs:w-[90%] w-[100%] h-[50px] xs:flex xs:justify-between">
          <div className="flex w-full justify-between">
            <Link href={"/"}>
              <h1
                className={`${PlusJakartaSans.className} xl:text-[32px] lg:text-[28px] font-[700] md:text-[25px] text-[20px] text-[#3563E9] cursor-pointer tracking-tighter lg:mt-0 md:mt-1 mt-1`}
              >
                MORENT
              </h1>
            </Link>

            <div className="xs:hidden cursor-pointer flex gap-[7px]">
              <div className="w-[40px] h-[40px] border border-[#C3D4E966] rounded-full px-1 py-1">
                <MdFavorite className="text-[#717e96] text-[30px] hover:text-[#3563E9] transition-all duration-300 cursor-pointer" />
              </div>

              <div className="w-[40px] h-[40px] border border-[#C3D4E966] rounded-full px-1 py-1">
                <IoNotifications className="text-[#717e96] text-[30px] hover:text-[#3563E9] transition-all duration-300 cursor-pointer" />
              </div>

              <div className="w-[40px] h-[40px] border border-[#C3D4E966] rounded-full px-1 py-1">
                <IoMdSettings className="text-[#717e96] text-[30px] hover:text-[#3563E9] transition-all duration-300 cursor-pointer" />
              </div>

              <Link href={"/cart"}>
                <div className="relative w-[40px] h-[40px] border border-[#C3D4E966] rounded-full px-1 py-1">
                  <IoMdCart className="text-[#717e96] text-[30px] hover:text-[#3563E9] transition-all duration-300 cursor-pointer" />
                 
                  {cart.length > 1 && <span className="absolute top-[-4px] right-1 rounded-full text-[10px] bg-[#3563E9] text-white  px-[5px] py-[1px]">
                  {cart.length}
                  </span> }
                </div>
              </Link>

              <Link href={"/admin"}>
                <AvatarDemo />
              </Link>
            </div>
          </div>

          {/* Search-bar */}
          <div className="flex items-center  rounded-full border lg:px-4 md:px-2 px-1 py-2 xl:w-[892px] xl:h-[44px] lg:w-[820px] lg:h-[44px] md:w-[790px] md:h-[40px] sm:h-[35px] xs:w-[900px] xs:h-[35px] w-full xs:mt-1 md:ml-0 sm:ml-1 xs:ml-2 mt-2">
            {/* Search Icon */}
            <CiSearch className="text-[#596780] cursor-pointer lg:text-[24px] md:text-[20px] sm:text-[20px] text-[25px]" />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search something here"
              className="flex-grow outline-none text-gray-700 md:ml-3 sm:ml-5 xs:ml-3 md:w-[70%] w-[100%]"
            />

            {/* Filter Icon */}
            <Image
              src={filter}
              alt="filter"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </div>
        </div>

        <div className="md:w-[40%] w-[10%] h-[50px] flex md:justify-end lg:py-[5px] md:py-[6px]">
          <div className=" w-[236px] h-[44px] md:flex lg:gap-[20px] gap-[12px] ml-2 hidden">
            {/* Favourite-icon */}
            <div className="2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border border-[#C3D4E966] rounded-full lg:py-[3.5px] lg:px-[4px] md:py-[3.5px] md:px-[4px]">
              <MdFavorite className="text-[#717e96] lg:text-[30px] md:text-[25px] cursor-pointer hover:text-[#3563E9] transition-all duration-300" />
            </div>
            {/* Notification-icon */}

            <div className="relative 2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border border-[#C3D4E966] rounded-full lg:py-[3.5px] lg:px-[4px] md:py-[3.5px] md:px-[4px]">
              {/* Notification Icon */}
              <IoNotifications className="text-[#717e96] lg:text-[30px] md:text-[25px] cursor-pointer hover:text-[#3563E9] transition-all duration-300" />

              {/* Notification Dot */}
              <span className="absolute top-[-2px] right-1 w-[11px] h-[11px] bg-[#FF4423] rounded-full border-2 border-white"></span>
            </div>

            {/* Setting-icon */}
            <div className="2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border border-[#C3D4E966] rounded-full lg:py-[3.5px] lg:px-[4px] md:py-[3.5px] md:px-[4px]">
              <IoMdSettings className="text-[#717e96] lg:text-[30px] md:text-[25px] cursor-pointer hover:text-[#3563E9] transition-all duration-300" />
            </div>

            {/* Cart-icon */}
            <Link href={"/cart"}>
              <div className="relative 2xl:w-[45px] 2xl:h-[45px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border border-[#C3D4E966] rounded-full lg:py-[3.5px] lg:px-[4px] md:py-[3.5px] md:px-[4px] group">
                {/* cart Icon */}
                <IoMdCart className="text-[#717e96] lg:text-[30px] md:text-[25px] cursor-pointer group-hover:text-[#3563E9] transition-all duration-300" />

                {/* cart item */}
                {cart.length > 0 && (
                  <span className="absolute top-[-4px] right-1 rounded-full text-[10px] bg-[#3563E9] text-white  px-[5px] py-[1px]">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Avatar */}
          <div className="md:ml-0 ml-[30px] xs:block hidden cursor-pointer">
            <Link href={"/admin"}>
              <AvatarDemo />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
