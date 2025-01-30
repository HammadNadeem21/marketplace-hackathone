import React from "react";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
const PlusJakartaSans = Plus_Jakarta_Sans({
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

const Footer = () => {
  return (
    <div className="lg:bg-white bg-transparent">
      <div className="w-full lg:h-[400px] h-[400px] pt-[50px] lg:px-[110px] px-5">
        <div className="w-full h-auto lg:grid lg:grid-rows-[1fr,100px] grid-rows-[1fr,200px] lg:grid-cols-2 flex flex-col lg:gap-14 md:gap-0 gap-10 justify-center">
          {/* Logo and Description */}
          <div className="lg:m-0 m-auto">
            <div className="lg:w-[292px] h-auto md:w-[500px] lg:text-left sm:text-center text-left">
              <Link href={'/'}>
              <h1
                className={`${PlusJakartaSans.className} lg:text-[32px] md:text-[40px] text-[24px] text-[#3563E9]`}
              >
                MORENT
              </h1>
              </Link>
              <p
                className={`${PlusJakartaSans500.className} text-[16px] lg:text-[#13131399] text-[#90A3BF] mt-2`}
              >
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="grid lg:gap-8 gap-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:justify-center lg:px-0 md:px-[150px]">
            {/* About */}
            <div className="w-auto h-auto pl-2  lg:mt-0 md:mt-2">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C] cursor-pointer`}
              >
                About
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p className="cursor-pointer">How it works</p>
                <p className="cursor-pointer">Featured</p>
                <p className="cursor-pointer">Partnership</p>
                <p className="cursor-pointer">Business Relation</p>
              </div>
            </div>

            {/* Community */}
            <div className="w-auto h-auto lg:ml-0 ml-[50px] lg:mt-0 md:mt-2">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C] cursor-pointer`}
              >
                Community
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p className="cursor-pointer">Events</p>
                <p className="cursor-pointer">Blog</p>
                <p className="cursor-pointer">Podcast</p>
                <p className="cursor-pointer">Invite a friend</p>
              </div>
            </div>

            {/* Socials */}
            <div className="w-auto h-auto lg:ml-0 md:ml-[80px] ml-0 lg:mt-0 md:mt-2">
              <h1
                className={`${PlusJakartaSans600.className} text-[20px] text-[#1A202C] cursor-pointer`}
              >
                Socials
              </h1>
              <div className="mt-[15px] leading-[30px] pt-4 text-[14px] lg:text-[#13131399] text-[#90A3BF]">
                <p className="cursor-pointer">Discord</p>
                <p className="cursor-pointer">Instagram</p>
                <p className="cursor-pointer">Twitter</p>
                <p className="cursor-pointer">Facebook</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="col-span-2 w-full">
            <div className="bg-[#13131329] w-full h-[1px] mt-2 md:block hidden"></div>

            <div className="lg:mt-[20px] flex flex-col md:flex-row justify-between items-center gap-4">
              <h1
                className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C]`}
              >
                ©2022 MORENT. All rights reserved
              </h1>

               <div className="flex flex-wrap gap-4 sm:mb-0 mb-2">
                <h2
                  className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
                >
                  Privacy & Policy
                </h2>
                <h2
                  className={`${PlusJakartaSans600.className} lg:text-[16px] text-[13px] text-[#1A202C] tracking-tighter`}
                >
                  Terms & Condition
                </h2>
              </div>



            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Footer;

