"use client";
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
import rush from '../../public/recomended/rush.png';
import crv from '../../public/recomended/crv.png';
import terios from '../../public/recomended/terios.png';
import crvb from '../../public/recomended/crvb.png';
import mgzx from '../../public/recomended/mgzx.png';
import mgzs from '../../public/recomended/mgzs.png';
import first from '../../public/popularCars/first.png'

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import { Cars } from "../../types/cars";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/lib/queries";
import CarCard from "./CarCard";
import { urlFor } from "@/sanity/lib/image";

const Recomended = () => {
   // fetch data from API
    const [car, setCar] = useState<Cars[]>([]);
    useEffect(() => {
      async function getData() {
        const fetchData: Cars[] = await client.fetch(allCars);
        setCar(fetchData);
      }
      getData();
    }, []);
  
    // Filter Array
    const popularCars = car.filter((car) => car.tags.includes("recommended"));
  return (
    <div>
  <section className="container px-4 py-24 mx-auto">
      {/* Header */}
      <div className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}>
        <h1 className="text-[#90A3BF] text-[16px]">Recommendation Cars</h1>
      </div>

      {/* Cards Container */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {popularCars.map((items) => (
              <CarCard
                key={items._id}
                name={items.name}
                type={items._type}
                image={items.image ? urlFor(items.image).url() : ""}
                fuelCapacity={items.fuelCapacity}
                transmission={items.transmission}
                seatingCapacity={items.seatingCapacity}
                pricePerDay={items.pricePerDay}
                slug={items.slug.current}
              />
            ))}

    
        {/* Car 1 */}
        {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              All New Rush
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={rush} alt="Koenigsegg" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>70L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $72/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>

          <div className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}>$80.00</div>
        </div> */}
        



        {/* Car 2 */}
        {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              CR -V
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={crv} alt="Nissan GT-R" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mt-9">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>80L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $80/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
        </div> */}
        



        {/* Car 3 */}
        {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              All New Terios
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={terios} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>90L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
        </div> */}
        




        {/* Car 4 */}
        {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              CR -V
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={crvb} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>80L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $80/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
        </div> */}
        





        {/* Car 5 */}
        {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
            MG ZX Exclusice
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>Hatchback</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={mgzx} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>70L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                4 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $76/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
          <div className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}>$80.00</div>
        </div> */}

         {/* Car 6 */}
         {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
            New MG ZS
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={mgzs} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>80L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $80/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
         
        </div> */}

         {/* Car 7 */}
         {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
            MG ZX Exclusice
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>Hatchback</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={mgzx} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>90L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                4 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $74/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
          <div className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}>$80.00</div>
        </div> */}

         {/* Car 8 */}
         {/* <div className="w-full md:w-[304px] p-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
            New MG ZS
            </h1>
            <MdFavorite size={24} className="text-[#ED3F3F]" />
          </div>
          <h2 className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}>SUV</h2>
          <div className="w-full flex justify-center my-6">
            <Image src={mgzs} alt="Rolls Royce" height={300} width={300} className="w-[232px]" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>80L</p>
            </div>
            <div className="flex items-center">
              <TbSteeringWheel size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>Manual</p>
            </div>
            <div className="flex items-center">
              <FaUserGroup size={24} className="text-[#90A3BF]" />
              <p className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}>
                6 People
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}>
              $80/ <span className="text-[14px] text-[#90A3BF]">day</span>
            </h1>
            <button
              className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
            >
              Rent Now
            </button>
          </div>
         
        </div> */}

      </div>
      <div className=" flex justify-center mt-[100px]">
      <Link href={'/category'}>
      <button className={`${PlusJakartaSans500.className} w-[156px] h-[44px] rounded-[4px] px-[20px] py-[10px] bg-[#3563E9] text-white text-[14px] hover:bg-[#002fbb] transition-all duration-300`}>Show more cars</button></Link>
      </div>
    </section>
    </div>
  );
};

export default Recomended;



