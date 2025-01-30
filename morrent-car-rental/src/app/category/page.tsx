"use client";
import { SelectRent } from "@/components/Select_rent";

import { SliderDemo } from "@/components/Slider";
import MobileSidebar from "@/components/MobileSidebar";
import Navbar from "@/components/Navbar";


import { TbSwitchVertical } from "react-icons/tb";

// Font
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Cars } from "../../../types/cars";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/lib/queries";
import CarCard from "@/components/CarCard";
import { urlFor } from "@/sanity/lib/image";

const PlusJakartaSans700 = Plus_Jakarta_Sans({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});

export default function Category() {
  // fetch data from API
  const [car, setCar] = useState<Cars[]>([]);
  useEffect(() => {
    async function getData() {
      const fetchData: Cars[] = await client.fetch(allCars);
      setCar(fetchData);
    }
    getData();
  }, []);

  const sportsCars = car;
  const sedanCars = car.filter((car) => car.type === "Sedan");
  const electricCars = car.filter((car) => car.type === "Electric");
  const gasolineCars = car.filter((car) => car.type === "Gasoline");
  const dieselCars = car.filter((car) => car.type === "Diesel");
  const hybridCars = car.filter((car) => car.type === "Hybrid");
  const suvCars = car.filter((car) => car.type === "SUV");
  const hatchbackCars = car.filter((car) => car.type === "Hatchback");

  return (
    <div>
      {/* Mobile Sidebar (Start) */}
      <div className="md:hidden block sticky z-50 bg-white">
        <MobileSidebar />
      </div>
      {/* Mobile Sidebar (End) */}

      {/* Navbar (start) */}
      <div>
        <Navbar />
      </div>
      {/* Navbar (End) */}

      <div className="grid md:grid-cols-[25%,75%] grid-cols-1">
        {/* sidebar */}
        <div className="w-full md:block hidden">
          <div className="bg-white h-full py-5 px-3 mt-3">
            <div className="w-[176px] h-[302px] ml-5 mt-5">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                TYPE
              </h1>

              <div className="mt-3">
                <div>
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Sport
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    SUV
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    MPV
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Sedan
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Coupe
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  <label
                    htmlFor=""
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    Hetchback
                  </label>
                </div>
              </div>
            </div>

            <div className="w-[176px] h-[212px] ml-5">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                C A P A C I T Y
              </h1>

              <div className="mt-3">
                <div>
                  <input type="checkbox" name="" id="one" />
                  <label
                    htmlFor="one"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    2 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="two" />
                  <label
                    htmlFor="two"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    4 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="three" />
                  <label
                    htmlFor="three"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    6 Person
                  </label>
                </div>

                <div className="mt-3">
                  <input type="checkbox" name="" id="four" />
                  <label
                    htmlFor="four"
                    className={`${PlusJakartaSans600.className} text-[20] ml-5`}
                  >
                    8 or More
                  </label>
                </div>
              </div>
            </div>

            <div className="ml-5 mt-0">
              <h1
                className={`${PlusJakartaSans600.className} text-[12px] text-[#90A3BF]`}
              >
                TYPE
              </h1>
              <SliderDemo className="mt-4" />
              <h2
                className={`${PlusJakartaSans600.className} text-[12px] text-black mt-4`}
              >
                Max. $100.00
              </h2>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="w-full">
          {/* Pick Up & Drop Up (Start) */}

          <div className="lg:h-[190px] h-[380px] px-5 py-3">
            <div className="h-[150px] grid xl:grid-cols-[1fr,auto,1fr] lg:grid-cols-[1fr,auto,1fr] xs:grid-cols-[500px] grid-cols-1 justify-center py-3 mt-2">
              {/* Pick - Up */}
              <div
                className={`${PlusJakartaSans600.className} text-base text-[#1A202C] h-[132px] bg-white py-2 xl:px-5 lg:px-[10px] px-5 rounded-[10px]`}
              >
                <input type="radio" id="pickUp" />
                <label htmlFor="pickUp" className="ml-2 cursor-pointer">
                  Pick-Up
                </label>

                <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr] xl:gap-3  xs:gap-2 gap-1 mt-[14px]">
                  {/* Locations */}
                  <div className="border-[#C3D4E9] border-r-2 pr-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>
                    <div className="h-[25px] mt-3">
                      <SelectRent
                        name="Select your location"
                        opt1="Karachi"
                        opt2="Lahore"
                        opt3="Islamabad"
                        opt4="Peshawar"
                        opt5="Multan"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="border-[#C3D4E9] border-r-2 pr-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Date
                    </h1>
                    <div className="w-full h-[25px] mt-3">
                      <SelectRent
                        name="Select your date"
                        opt1="6"
                        opt2="12"
                        opt3="18"
                        opt4="24"
                        opt5="30"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Time
                    </h1>
                    <div className="w-full h-[25px] mt-3">
                      <SelectRent
                        name="Select your time"
                        opt1="8:00 am"
                        opt2="12:00 pm"
                        opt3="4:00 pm"
                        opt4="8:00 pm"
                        opt5="12:00 am"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Switch-Button */}
              <div className="xl:w-[60px] xl:h-[60px] lg:w-[40px] lg:h-[40px] w-[50px] h-[50px] bg-[#3563E9] rounded-md xl:py-[12px] xl:px-[12px] lg:py-2 lg:px-2 py-3 px-3 cursor-pointer lg:mt-10 m-auto">
                <TbSwitchVertical className="text-white xl:text-[35px] text-[25px]" />
              </div>

              {/* Drop - Off */}
              <div className=" h-[132px] bg-white py-2 xl:px-5 lg:px-[10px] px-5 rounded-[10px]">
                <input type="radio" id="dropOff" />
                <label
                  htmlFor="dropOff"
                  className={`${PlusJakartaSans600.className} text-base text-[#1A202C] ml-2 cursor-pointer`}
                >
                  Drop-Off
                </label>

                <div className="w-full h-[85px] grid grid-cols-[1fr,1fr,1fr] xl:gap-3 xs:gap-2 gap-1  mt-[14px]">
                  {/* Locations */}
                  <div className="border-[#C3D4E9] border-r-2 pr-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Locations
                    </h1>
                    <div className="h-[25px] mt-3">
                      <SelectRent
                        name="Select your location"
                        opt1="Karachi"
                        opt2="Lahore"
                        opt3="Islamabad"
                        opt4="Peshawar"
                        opt5="Multan"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="border-[#C3D4E9] border-r-2 pr-3">
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Date
                    </h1>
                    <div className="w-full h-[25px] mt-3">
                      <SelectRent
                        name="Select your date"
                        opt1="6"
                        opt2="12"
                        opt3="18"
                        opt4="24"
                        opt5="30"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <h1
                      className={`${PlusJakartaSans700.className} text-[16px] text-[#1A202C]`}
                    >
                      Time
                    </h1>
                    <div className="w-full h-[25px] mt-3">
                      <SelectRent
                        name="Select your time"
                        opt1="8:00 am"
                        opt2="12:00 pm"
                        opt3="4:00 pm"
                        opt4="8:00 pm"
                        opt5="12:00 am"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pick Up & Drop Up (End) */}

          {/* Cars Section (Start) */}

          <div className="mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold">
              Sports
            </h1>
            {/* <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div> */}

            {sportsCars.map((items) => (
              <CarCard
                key={items._id}
                name={items.name}
                type={items.type}
                image={items.image ? urlFor(items.image).url() : ""}
                fuelCapacity={items.fuelCapacity}
                transmission={items.transmission}
                seatingCapacity={items.seatingCapacity}
                pricePerDay={items.pricePerDay}
                slug={items.slug.current}
                _id={items._id}
                quantity={items.quantity}
              />
            ))}




            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Sedan
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {sedanCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>




            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Electric
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {electricCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>




            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Gasoline
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {gasolineCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>




            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Diesel
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {dieselCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>



            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Hybrid
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {hybridCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>

            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              SUV
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-20 h-1 rounded-full bg-blue-600"></div>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {suvCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>



            <h1 className="xl:col-span-3 md:col-span-2 col-span-1 text-center text-2xl font-bold mt-7">
              Hatchback
            </h1>
            <div className="xl:col-span-3 md:col-span-2 col-span-1 mx-auto w-24 h-1 rounded-full bg-blue-600"></div>

            <div className="xl:col-span-3 md:col-span-2 col-span-1 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-5 md:px-2 px-6 py-5 gap-4">
              {hatchbackCars.map((items) => (
                <CarCard
                  key={items._id}
                  name={items.name}
                  type={items.type}
                  image={items.image ? urlFor(items.image).url() : ""}
                  fuelCapacity={items.fuelCapacity}
                  transmission={items.transmission}
                  seatingCapacity={items.seatingCapacity}
                  pricePerDay={items.pricePerDay}
                  slug={items.slug.current}
                  _id={items._id}
                  quantity={items.quantity}
                />
              ))}
            </div>

          </div>
        </div>
        {/* Cars Section (End) */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
