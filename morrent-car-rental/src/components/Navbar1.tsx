

"use client";
// Navbar Component
import React from "react";
import { useAppSelector } from "@/app/store/hooks";

import Image from "next/image";

// Icons
import filter from "../../public/icon/filter.png";
import { CiSearch } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings, IoMdCart } from "react-icons/io";

// Avatar Component
import { AvatarDemo } from "./Avatar";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "800",
  display: "swap",
  subsets: ["latin"],
});

const Navbar1 = () => {
  // For Cart Item
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="bg-white w-full">
      <div className="w-full h-auto border-b-[1px] border-[#C3D4E966] flex flex-col lg:flex-row items-center py-4 px-4 lg:px-[50px]">
        {/* Top Section - Logo & Search Bar */}
        <div className="w-full flex justify-between items-center lg:grid lg:grid-cols-3">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <h1
                className={`${PlusJakartaSans.className} xs:text-[24px] sm:text-[28px] lg:text-[32px] text-[20px] font-bold text-[#3563E9] cursor-pointer`}
              >
                MORENT
              </h1>
            </Link>
          </div>

          {/* Search Bar (Hidden on small screens) */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2 w-full lg:max-w-[480px]">
            <CiSearch className="text-[#596780] cursor-pointer text-[24px]" />
            <input
              type="text"
              placeholder="Search something here"
              className="flex-grow outline-none text-gray-700 ml-3 w-full"
            />
            <Image src={filter} alt="filter" className="w-[24px] h-[24px] cursor-pointer" />
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:justify-end">
            {/* Favorite */}
            <div className="relative flex items-center justify-center xs:w-10 xs:h-10 w-8 h-8 border rounded-full cursor-pointer group">
              <MdFavorite className="text-[#717e96] xs:text-[24px] text-[20px] group-hover:text-[#3563E9]" />
            </div>

            {/* Notifications */}
            <div className="relative flex items-center justify-center xs:w-10 xs:h-10 w-8 h-8 border rounded-full cursor-pointer group">
              <IoNotifications className="text-[#717e96] xs:text-[24px] text-[20px] group-hover:text-[#3563E9]" />
              <span className="absolute top-0 right-0 w-[10px] h-[10px] bg-[#FF4423] rounded-full border-2 border-white"></span>
            </div>

            {/* Settings */}
            <div className="relative flex items-center justify-center xs:w-10 xs:h-10 w-8 h-8 border rounded-full cursor-pointer group">
              <IoMdSettings className="text-[#717e96] xs:text-[24px] text-[20px] group-hover:text-[#3563E9]" />
            </div>

            {/* Cart */}
            <Link href={"/cart"}>
              <div className="relative flex items-center justify-center xs:w-10 xs:h-10 w-8 h-8 border rounded-full group">
                <IoMdCart className="text-[#717e96] xs:text-[24px] text-[20px] group-hover:text-[#3563E9] transition-all duration-300" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 text-[8px] bg-[#3563E9] text-white px-[5px] py-[1px] rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>

            {/* Avatar */}
            <Link href={"/admin"}>
              <AvatarDemo />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar (Visible only on small screens) */}
        <div className="flex items-center border rounded-full px-2 py-2 w-full max-w-[90%] mt-3 lg:hidden">
          <CiSearch className="text-[#596780] cursor-pointer text-[24px]" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-grow outline-none text-gray-700 ml-3"
          />
          <Image src={filter} alt="filter" className="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
