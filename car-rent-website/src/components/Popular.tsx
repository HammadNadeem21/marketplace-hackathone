"use client"
import React, { useEffect, useState } from "react";


// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});
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

// Images
import Image from "next/image";
import first from "../../public/popularCars/first.png";
import NissanGtR1 from "../../public/popularCars/NissanGtR1.png";
import rollsRoyal from "../../public/popularCars/rollsRoyal.png";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import { Cars } from "../../types/cars";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Popular = () => {

  const [car, setCar] = useState<Cars[]>([])
  useEffect(
    ()=>{
      async function getData(){
        const fetchData : Cars[] = await client.fetch(allCars);
        setCar(fetchData)
      }
      getData()
    },
    [])


  return (
    <div>
      <section>
        <div className="container px-4 py-24 mx-auto">
          {/* Header */}
          <div
            className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}
          >
            <h1 className="text-[#90A3BF] text-[16px]">Popular Cars</h1>
            <button className="text-[#3563E9] text-[16px]">View All</button>
          </div>

{/* <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
  {car.map(
    (items) => (
      <div key={items._id} >
        {items.name}
        {items.image && (
          <Image src={urlFor(items.image).url()}
          alt={items.name} height={200} width={200}
          />
        )}
      </div>
      <div key={items._id} className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1
          className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
        >
          {items.name}
        </h1>
        <MdFavorite size={24} className="text-[#ED3F3F]" />
      </div>
      <h2
        className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
      >
        {items.type}
      </h2>
      <div className="w-full flex justify-center my-6">
        
        <Image src={urlFor(items.image).url()}
          alt={items.name} height={200} width={200}
          />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
            {items.fuelCapacity}
          </p>
        </div>
        <div className="flex items-center">
          <TbSteeringWheel size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
            {items.transmission}
          </p>
        </div>
        <div className="flex items-center">
          <FaUserGroup size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
           {items.seatingCapacity}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1
          className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
        >
          {items.pricePerDay} <span className="text-[14px] text-[#90A3BF]">day</span>
        </h1>

        <Link href={`${items.name}`}>
        <button
          className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
        >
          Rent Now
        </button>
        </Link>


      </div>
    </div>
    )
  )}
</div> */}
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
  {car.map((items) => (
    <div key={items._id} className="w-full p-4 bg-white rounded-lg shadow-lg md:max-w-[300px]">
      <div className="flex justify-between items-center mt-2">
        <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
          {items.name}
        </h1>
        <MdFavorite size={24} className="text-[#ED3F3F]" />
      </div>
      <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>
        {items.type}
      </h2>
      <div className="w-full flex justify-center mt-6 h-[150px]">
        <Image
          src={items.image ? urlFor(items.image).url() : ""}
          alt={items.name}
          height={200}
          width={200}
          className="w-full h-auto object-cover mt-2"
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
          <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
            {items.fuelCapacity}
          </p>
        </div>
        <div className="flex items-center">
          <TbSteeringWheel size={24} className="text-[#90A3BF]" />
          <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
            {items.transmission}
          </p>
        </div>
        <div className="flex items-center">
          <FaUserGroup size={24} className="text-[#90A3BF]" />
          <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
            {items.seatingCapacity}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
          {items.pricePerDay}
        </h1>
        <Link href={`/${items.name}`}>
          <button
            className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
          >
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>



          {/* Cards Container */}
          <div className="flex xl:flex-nowrap flex-wrap gap-6 justify-center">



            {/* Card 1 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Koenigsegg
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={first} alt="Koenigsegg" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    90L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    2 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $99.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>

                <Link href={`Koenigsegg`}>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
                </Link>


              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Nissan GT-R
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={NissanGtR1} alt="Nissan GT-R" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    80L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    2 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $80.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>

                <Link href={`NissanGT-R`}>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
                </Link>


              </div>

              <div className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}>$100.00</div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Rolls Royce
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sedan
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={rollsRoyal} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    70L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $96.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
            </div>

               {/* Card 4 */}
               <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Nissan GT - R
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image src={NissanGtR1} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    80L
                  </p>
                </div>
                <div className="flex items-center">
                  <TbSteeringWheel size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    Manual
                  </p>
                </div>
                <div className="flex items-center">
                  <FaUserGroup size={24} className="text-[#90A3BF]" />
                  <p
                    className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
                  >
                    2 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $96.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
              <div className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}>$100.00</div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;


