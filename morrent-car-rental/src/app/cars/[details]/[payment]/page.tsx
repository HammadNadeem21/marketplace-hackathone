import React from "react";

// components
import { SelectPay } from "@/components/Selectpayment";

// icons
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

// Images
import Image from "next/image";
import logo from "../../../../../public/payment/logo.png";
import Visa from "../../../../../public/payment/Visa.png";
import PayPal from "../../../../../public/payment/PayPal.png";
import Bitcoin from "../../../../../public/payment/Bitcoin.png";
// Font
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Cars } from "../../../../../types/cars";
import { urlFor } from "@/sanity/lib/image";
import Navbar1 from "@/components/Navbar1";
import { AlertDialogDemo } from "@/components/Checkout_Button";

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

// For Dynamic Car Data Routing
interface carDetailPage {
  params: Promise<{ details: string }>;
}

async function getCarDetail(slug: string): Promise<Cars> {
  return client.fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
  name,
  pricePerDay,
  image,
  
  }`,
    { slug }
  );
}

const Payment = async ({
  params,
}: {
  params: { details: string; payment: string };
}) => {
  const { details, payment } = await params;
  const car = await getCarDetail(details);

  return (
    <div>
      {/* Navbar */}
      <Navbar1 />
      <div className="grid lg:grid-cols-[30%,70%] grid-cols-1 px-6 gap-2">
        {/* right Side-(Start) */}
        <div className="w-full py-5">
          {/* Rental summary */}
          <div className="w-full h-auto bg-white rounded-[10px] py-5 px-3 ">
            <div>
              <h1
                className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
              >
                Rental Summary
              </h1>
              <p
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </p>
            </div>

            <div className="w-full h-[108px] flex items-center mt-4">
              <div>
                <Image
                  src={car.image ? urlFor(car.image).url() : ""}
                  alt="view"
                  height={500}
                  width={500}
                  className="w-[70%]"
                />
              </div>

              <div className="w-[200px] h-[72px] ml-2">
                <h1
                  className={`${PlusJakartaSans700.className} xl:text-[28px] text-[18px] text-[#1A202C]`}
                >
                  {car.name}
                </h1>

                <div className="flex">
                  <IoIosStar className="text-[#FBAD39] xl:text-[16px] lg:text-[12px] text-[16px]" />
                  <IoIosStar className="text-[#FBAD39] xl:text-[16px] lg:text-[12px] text-[16px]" />
                  <IoIosStar className="text-[#FBAD39] xl:text-[16px] lg:text-[12px] text-[16px]" />
                  <IoIosStar className="text-[#FBAD39] xl:text-[16px] lg:text-[12px] text-[16px]" />
                  <IoIosStar className="text-[#90A3BF] xl:text-[16px] lg:text-[12px] text-[16px]" />

                  <h2
                    className={`${PlusJakartaSans500.className} xl:text-[14px] lg:text-[10px] text-[14px] text-[#596780] ml-2`}
                  >
                    440+ Reviewer
                  </h2>
                </div>
              </div>
            </div>

            {/* Line */}
            <div className="w-full h-[2px] bg-[#C3D4E966] mt-[40px]"></div>

            {/* Subtotal */}
            <div className="mt-[40px] flex justify-between">
              <h1
                className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[16px]`}
              >
                Subtotal
              </h1>
              <h2
                className={`${PlusJakartaSans600.className} text-[#1A202C] text-[16px]`}
              >
                {car.pricePerDay.replace("/day", "")}
              </h2>
            </div>

            {/* Tax */}
            <div className="mt-[40px] flex justify-between">
              <h1
                className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[16px]`}
              >
                Tax
              </h1>
              <h2
                className={`${PlusJakartaSans600.className} text-[#1A202C] text-[16px]`}
              >
                $0
              </h2>
            </div>

            {/* promo-code */}
            <div className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] mt-[30px] py-4 px-5 flex justify-between">
              <input
                type="text"
                className="xs:w-[150px] w-[120px] bg-transparent focus:outline-none focus:border-none"
                placeholder="Apply promo code"
              />
              <h1
                className={`${PlusJakartaSans600.className} text-[#1A202C] xs:text-[16px] text-[14px]`}
              >
                Apply now
              </h1>
            </div>

            {/* Price */}
            <div className="w-full h-[48px] mt-6 flex justify-between">
              <div className="w-[70%]">
                <h1
                  className={`${PlusJakartaSans700.className} text-[#1A202C] xs:text-[18px] text-[16px]`}
                >
                  Total Rental Price
                </h1>
                <h2
                  className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[12px]`}
                >
                  Overall price and includes rental discount
                </h2>
              </div>
              <div className="w-[30%] flex items-center justify-end">
                <h1
                  className={`${PlusJakartaSans700.className} text-[#1A202C] xs:text-[26px] text-[20px]`}
                >
                  {car.pricePerDay.replace("/day", "")}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right-Side-(End) */}

        {/* LeftSide (Start) */}

        <div className="w-full py-5">
          {/* Billing Info (Start) */}
          <div className="bg-white rounded-lg w-full px-5 py-5">
            {/* Top Heading */}
            <div className="w-full h-[48px] flex justify-between">
              <div className="w-full md:w-[192px]">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Billing Info
                </h1>

                <h2
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                >
                  Please enter your billing info
                </h2>
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] mt-5`}
              >
                Step 1 of 4
              </h2>
            </div>

            {/* Input Fields */}
            <div className="w-full h-auto mt-6 grid md:grid-cols-2 grid-cols-1 gap-4">
              {/* Name */}
              <div className="h-[92px] w-full">
                <h1
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                >
                  Name
                </h1>

                <input
                  type="text"
                  placeholder="Your name"
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-full h-[56px] bg-[#F6F7F9] rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                />
              </div>

              {/* Phone Number */}
              <div className="h-[92px] w-full">
                <h1
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                >
                  Phone Number
                </h1>

                <input
                  type="text"
                  placeholder="Phone number"
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-full h-[56px] bg-[#F6F7F9] rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                />
              </div>

              {/* Address */}
              <div className="h-[92px] w-full">
                <h1
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                >
                  Address
                </h1>

                <input
                  type="text"
                  placeholder="Address"
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-full h-[56px] bg-[#F6F7F9] rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                />
              </div>

              {/* Town/City */}
              <div className="h-[92px] w-full">
                <h1
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                >
                  Town/City
                </h1>

                <input
                  type="text"
                  placeholder="Town or City"
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-full h-[56px] bg-[#F6F7F9] rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                />
              </div>
            </div>
          </div>
          {/* Billing Info (End) */}

          {/* Rational Info (Start) */}

          <div className="w-full px-5 py-5 rounded-lg mt-5 bg-white">
            {/* Top Heading */}
            <div className="w-full h-[48px] flex justify-between">
              <div className="w-full md:w-[202px]">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Rental Info
                </h1>

                <h2
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                >
                  Please select your rental date
                </h2>
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] mt-3 md:mt-0`}
              >
                Step 2 of 4
              </h2>
            </div>

            {/* Pick-Up */}
            <div className="mt-6">
              <div className="w-full h-[48px] flex items">
                <input type="radio" name="rental" id="pickup" />
                <label
                  htmlFor="pickup"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-5 mt-[12px]`}
                >
                  Pick - Up
                </label>
              </div>

              <div className="w-full h-auto mt-6 grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* Location */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Locations
                  </h1>
                  <SelectPay
                    name="Select Your City"
                    subname="Locations"
                    opt1="10 December"
                    opt2="20 December"
                    opt3="30 December"
                  />
                </div>

                {/* Date */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Date
                  </h1>
                  <SelectPay
                    name="Select your date"
                    subname="Dates"
                    opt1="10 December"
                    opt2="20 December"
                    opt3="30 December"
                  />
                </div>

                {/* Time */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Time
                  </h1>
                  <SelectPay
                    name="Select your time"
                    subname="Timings"
                    opt1="8:00 am"
                    opt2="4:00 pm"
                    opt3="8:00 pm"
                  />
                </div>
              </div>
            </div>

            {/* Drop-Off */}
            <div className="mt-6">
              <div className="w-full h-[48px] flex items-center">
                <input type="radio" name="rental" id="dropoff" />
                <label
                  htmlFor="dropoff"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-5`}
                >
                  Drop - Off
                </label>
              </div>

              <div className="w-full h-auto mt-6 grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* Location */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Locations
                  </h1>
                  <SelectPay
                    name="Select Your City"
                    subname="Locations"
                    opt1="Karachi"
                    opt2="Lahore"
                    opt3="Quetta"
                  />
                </div>

                {/* Date */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Date
                  </h1>
                  <SelectPay
                    name="Select your date"
                    subname="Dates"
                    opt1="10 December"
                    opt2="20 December"
                    opt3="30 December"
                  />
                </div>

                {/* Time */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Time
                  </h1>
                  <SelectPay
                    name="Select your time"
                    subname="Timings"
                    opt1="8:00 am"
                    opt2="4:00 pm"
                    opt3="8:00 pm"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Rational Info (End) */}

          {/* Payment Method (Start) */}
          <div className="w-full rounded-[10px] bg-white mt-5 px-6 py-5">
            {/* Top Heading */}
            <div className="w-full h-[48px]  flex justify-between">
              <div className="w-full md:w-[192px]">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Payment Method
                </h1>

                <h2
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                >
                  Please select your payment method
                </h2>
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] mt-5`}
              >
                Step 3 of 4
              </h2>
            </div>

            {/* Input Feilds (start) */}
            <div className="w-full h-auto bg-[#F6F7F9] mt-7 px-5 py-3 rounded-[10px]">
              <div className="w-full h-[48px]  flex justify-between">
                <div>
                  <input type="radio" name="" id="rational" />
                  <label
                    htmlFor="rational"
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-5 mt-3`}
                  >
                    Credit Card
                  </label>
                </div>

                <div className="flex justify-between w-[92px] h-[20px]">
                  <Image src={Visa} alt="visa" />
                  <Image src={logo} alt="visa-logo" />
                </div>
              </div>

              <div className="w-full h-auto mt-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
                {/* Card number */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Card Number
                  </h1>

                  <input
                    type="text"
                    placeholder="Card number"
                    className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-[90%] h-[56px] bg-white rounded-[10px] mt-4 focus:outline-none focus:ring-0 focus:border-none px-6`}
                  />
                </div>

                {/* Expration date */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Expration Date
                  </h1>

                  <input
                    type="text"
                    placeholder="DD/MM/YY"
                    className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-[90%] h-[56px] bg-white rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                  />
                </div>

                {/* Card holder */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    Card Holder
                  </h1>

                  <input
                    type="text"
                    placeholder="Card holder"
                    className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-[90%] h-[56px] bg-white rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                  />
                </div>

                {/* CVC */}
                <div className="h-[92px] w-full">
                  <h1
                    className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C]`}
                  >
                    CVC
                  </h1>

                  <input
                    type="text"
                    placeholder="CVC"
                    className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] w-[90%] h-[56px] bg-white rounded-[10px] mt-4 focus:outline-none focus:ring-0 px-6`}
                  />
                </div>
              </div>
            </div>
            {/* Payment method (end) */}

            {/* Paypal */}
            <div className="w-full h-[48px]  flex justify-between bg-[#F6F7F9] mt-5 px-5 py-3 rounded-[10px]">
              <div>
                <input type="radio" name="" id="paypal" />
                <label
                  htmlFor="paypal"
                  className={`${PlusJakartaSans600.className} xs:text-[16px] text-[14px] text-[#1A202C] ml-5 mt-3`}
                >
                  PayPal
                </label>
              </div>

              <div className="flex justify-between xs:w-[92px] xs:h-[20px] w-[72px] h-[17px] xs:mt-0 mt-1">
                <Image src={PayPal} alt="PayPal" />
              </div>
            </div>

            {/* Bitcoin */}
            <div className="w-full h-[48px]  flex justify-between bg-[#F6F7F9] mt-5 px-5 py-3 rounded-[10px]">
              <div>
                <input type="radio" name="" id="Bitcoin" />
                <label
                  htmlFor="Bitcoin"
                  className={`${PlusJakartaSans600.className} xs:text-[16px] text-[14px] text-[#1A202C] ml-5 mt-3`}
                >
                  Bitcoin
                </label>
              </div>

              <div className="flex justify-between xs:w-[92px] xs:h-[20px] w-[72px] h-[17px] xs:mt-0 mt-1">
                <Image src={Bitcoin} alt="Bitcoin" />
              </div>
            </div>
          </div>
          {/* Payment Method (End) */}

          {/* Confirmation Section (Start) */}
          <div className="w-full rounded-[10px] bg-white mt-5 px-6 py-5 ">
            <div className="w-full h-[48px]  flex justify-between">
              <div className="w-[500px]">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Confirmation
                </h1>

                <h2
                  className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
                >
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </h2>
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF] mt-5`}
              >
                Step 3 of 4
              </h2>
            </div>

            {/* Checkboxes */}
            <div className="w-full h-auto  flex justify-between bg-[#F6F7F9] sm:mt-6 px-5 py-3 rounded-[10px]  mt-[50px]">
              <div>
                <input type="checkbox" name="" id="check1" />
                <label
                  htmlFor="check1"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-5 mt-3`}
                >
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </label>
              </div>
            </div>

            <div className="w-full h-auto  flex justify-between bg-[#F6F7F9] mt-6 px-5 py-3 rounded-[10px]">
              <div>
                <input type="checkbox" name="" id="check2" />
                <label
                  htmlFor="check2"
                  className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] ml-5 mt-3`}
                >
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="w-full h-[58px]  flex justify-between mt-6 px-3 py-3 rounded-[10px]">
              <AlertDialogDemo />
            </div>

            {/* Safe */}
            <div className="h-[130px] mt-8 px-5 py-3">
              <div>
                <MdOutlineSecurity size={32} />
              </div>

              <h1
                className={`${PlusJakartaSans600.className} text-[16px] text-[#1A202C] mt-4`}
              >
                All your data are safe
              </h1>

              <h3
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                We are using the most advanced security to provide you the best
                experience ever.
              </h3>
            </div>
          </div>
        </div>
        {/* LeftSide (Start) */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Payment;
