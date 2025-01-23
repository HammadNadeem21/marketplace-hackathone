import React from "react";

// components
import { SliderDemo } from "@/components/Slider";
import Navbar from "@/components/Navbar";
import MobileSidebar from "@/components/MobileSidebar";
import Footer from "@/components/Footer";


// Images
import Image from "next/image";
import first from '../../../../public/popularCars/first.png'
import NissanGtR1 from '../../../../public/popularCars/NissanGtR1.png'
import rollsRoyal from '../../../../public/popularCars/rollsRoyal.png'
import crv from '../../../../public/recomended/crv.png'
import rush from '../../../../public/recomended/rush.png'
import terios from '../../../../public/recomended/terios.png'
import mgzx from "../../../../public/recomended/mgzx.png";
import Ad1Image from "../../../../public/Ad1Image.png";
import View1 from "../../../../public/detail/View1.png";
import View2 from "../../../../public/detail/View2.png";
import View3 from "../../../../public/detail/View3.png";
import review1 from "../../../../public/review/review1.png";
import review2 from "../../../../public/review/review2.png";
import Link from "next/link";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

// Font
import { Plus_Jakarta_Sans } from "next/font/google";
import { Cars } from "../../../../types/cars";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

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
    params : Promise<{details : string}>
}

async function getCarDetail (slug : string) : Promise<Cars> {
return client.fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
    name,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    image,
    
    }`,{slug}
)
}





const Detail =  async ({ params }:carDetailPage) => {
  const {details} = await params;
  const car = await getCarDetail(details)

  console.log(details);
  
  
  return (
    <div>
      {/* Mobile Sidebar (Start) */}
      <div className="md:hidden block z-50 bg-white">
        <MobileSidebar />
      </div>
      {/* Mobile Sidebar (End) */}
      {/* Navbar */}
      <Navbar />
      
      <div className="grid md:grid-cols-[25%,75%] grid-cols-1">
        {/* sidebar (Start) */}
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

            <div className="w-[176px] h-[302px] ml-5">
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

            <div className="ml-5">
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
        {/* sidebar (End) */}

        {/* Dashboard */}
        <div className="w-full">
          {/* Detail (Start) */}
          <div>
            <section className="text-gray-600 body-font">
              <div className="container px-4 py-5 mx-auto flex flex-wrap">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  {/* Right */}
                  <div className="flex flex-wrap w-full">
                    <div className="md:p-2 p-1 w-full">
                      <div className="bg-[url(/Ad1.jpeg)] bg-cover h-[360px] p-6 rounded-lg ">
                        <div
                          className="xl:w-[284px] lg:w-[240px] xl:h-[200px] lg:h-[180px]
              xs:h-[150px] h-[120px] text-white"
                        >
                          <div className="w-full h-[50px]">
                            <h1
                              className={`${PlusJakartaSans600.className} xl:text-[26px] lg:text-[20px]  xs:text-[30px] text-[20px]`}
                            >
                              Sports car with the best design and acceleration
                            </h1>
                          </div>

                          <div className="w-full lg:h-[48px] xl:mt-[100px] mt-[50px]">
                            <p
                              className={`${PlusJakartaSans500.className} lg:text-[16px] xs:text-[18px] text-[14px]`}
                            >
                              Safety and comfort while driving a futuristic and
                              elegant sports car
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-[106px] xs:mt-[20px] mt-[90px] xs:ml-[30px] ml-0">
                          <Image src={car.image ?  urlFor(car.image).url() : ""} alt="Ad1-Img" height={500} width={500}
                          className="w-[60%] h-full ml-14"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md:p-2 p-1 w-1/3 flex items-center">
                      <Image
                        src={car.image ?  urlFor(car.image).url() : ""}
                        alt="view-1"
                        className="w-full h-[60%]  block"
                        height={500} width={500}
                      />
                    </div>

                    <div className="md:p-2 p-1 w-1/3">
                      <Image
                        src={View2}
                        alt="view-1"
                        className="w-full object-cover h-full object-center block"
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/3">
                      <Image
                        src={View3}
                        alt="view-1"
                        className="w-full object-cover h-full object-center block"
                      />
                    </div>
                  </div>

                  {/* Left */}
                  <div className="flex flex-wrap w-full">
                    <div className="md:p-2 p-1 w-full">
                      <div className="w-full h-full object-cover object-center py-5 px-5 block bg-white rounded-lg">
                        <div className="w-full h-[72px] ">
                          <h1
                            className={`${PlusJakartaSans700.className} text-[32px] text-[#1A202C] capitalize`}
                          >
                            {car.name}
                          </h1>

                          <div className="flex">
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#FBAD39]" />
                            <IoIosStar size={16} className="text-[#90A3BF]" />

                            <h2
                              className={`${PlusJakartaSans500.className} text-[14px] text-[#596780] ml-2`}
                            >
                              440+ Reviewer
                            </h2>
                          </div>
                        </div>

                        <div className="w-full h-[100px] mt-8">
                          <p
                            className={`${PlusJakartaSans500.className} xs:text-[18px] text-[15px] text-[#596780]`}
                          >
                            NISMO has become the embodiment of Nissan&apos;s
                            outstanding performance, inspired by the most
                            unforgiving proving ground&#44; the &quot;race
                            track&quot;.
                          </p>
                        </div>

                        {/* Type */}
                     

                        <div className="w-full xs:mt-[60px] grid xl:grid-cols-2 lg:grid-cols-1 xs:grid-cols-2 grid-cols-1  mt-[80px]" >
                          <div className="w-full">
                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Type Car
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                {car.type}
                              </h2>
                            </div>

                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Steering
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                {car.transmission}
                              </h2>
                            </div>
                          </div>

                          <div className="w-full h-auto xl:mt-0 lg:mt-3 xs:mt-0 mt-3">
                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Capicity
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                {car.seatingCapacity}
                              </h2>
                            </div>

                            <div className="w-[200px] h-[30px] flex justify-between">
                              <h2
                                className={`${PlusJakartaSans500} text-[18px] text-[#90A3BF]`}
                              >
                                Gasoline
                              </h2>
                              <h2
                                className={`${PlusJakartaSans600} text-[20px] text-[#596780]`}
                              >
                                {car.fuelCapacity}
                              </h2>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="w-full h-[56px] flex justify-between mt-[35px]">
                          <div className="w-[200px]">
                            <div>
                              <h1
                                className={`${PlusJakartaSans700.className} xs:text-[25px] text-[20px] text-black`}
                              >
                                {car.pricePerDay}
                                {/* <span
                                  className={`${PlusJakartaSans600.className} xs:text-[16px] text-[12px] text-[#90A3BF]`}
                                >
                                  days
                                </span> */}
                              </h1>
                            </div>
                            <div>
                              {/* <h3
                                className={`${PlusJakartaSans700.className} text-[16px] text-[#90A3BF] line-through`}
                              >
                                $100.00
                              </h3> */}
                            </div>
                          </div>

                          <div className="w-[200px] bg-white flex items-center justify-end">
                            <Link href={`/cars/${details}/payment`}>
                              <button
                                className={`${PlusJakartaSans700} xs:text-[16px] text-[12px] bg-[#3563E9] xs:w-[140px] w-[100px] xs:h-[56px] h-[45px] text-white rounded-[4px] mr-2 cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                              >
                                Rent Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Detail (End) */}

          {/* Review */}

          <div className=" py-5 px-5">
            <div className="bg-white rounded-lg w-full h-full py-6 px-5">
              <div className="w-[136px] h-[28px] flex justify-between">
                <h1 className={`${PlusJakartaSans600.className} text-[20px]`}>
                  Reviews
                </h1>

                <button
                  className={`${PlusJakartaSans700.className} w-[44px] h-[28px] bg-[#3563E9] text-[14px]`}
                >
                  13
                </button>
              </div>

              {/* Review 1 */}
             
               <div className="w-full mt-8">
                <div className="w-full h-[56px] flex justify-between">
                  <div className="flex">
                    <Image
                      src={review1}
                      alt="review-1"
                      className="xs:h-[56px] xs:w-[56px] h-[45px] w-[45px] rounded-full"
                    />
                    <div className="xs:ml-6 ml-3">
                      <h1
                        className={`${PlusJakartaSans700.className} xs:text-[20px] text-[14px] text-[#1A202C]`}
                      >
                        Alex Stanton
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} xs:text-[14px] text-[12px] text-[#90A3BF]`}
                      >
                        CEO at Bukalapak
                      </h2>
                    </div>
                  </div>

                  <div className="w-[128px]">
                    <h2
                      className={`${PlusJakartaSans500.className} xs:text-[14px] text-[10px] text-[#90A3BF] ml-[40px] mt-2`}
                    >
                      21 July 2022
                    </h2>
                    <div className="flex mt-1 ml-[40px]">
                      <IoIosStar  className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar  className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar  className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar  className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar  className="text-[#90A3BF] xs:text-[16px] text-[12px]" />
                    </div>
                  </div>
                </div>

                <div className="w-full mt-3 overflow-hidden">
                  <p
                    className={`${PlusJakartaSans500.className} text-[12px] text-[#596780] break-words xs:mt-0 mt-5`}
                  >
                    We are very happy with the service from the MORENT App. Morent has a low
                    price and also a large variety of cars with good and comfortable
                    facilities. In addition, the service provided by the officers is also
                    very friendly and very polite.
                  </p>
                </div>
              </div>

              {/* Review 2 */}
            
              <div className="w-full mt-8">
                <div className="w-full h-[56px] flex justify-between">
                  <div className="flex">
                    <Image
                      src={review2}
                      alt="review-1"
                      className="xs:h-[56px] xs:w-[56px] h-[45px] w-[45px] rounded-full"
                    />
                    <div className="xs:ml-6 ml-3">
                      <h1
                        className={`${PlusJakartaSans700.className} xs:text-[20px] text-[14px] text-[#1A202C]`}
                      >
                        Skyler Dias
                      </h1>
                      <h2
                        className={`${PlusJakartaSans500.className} xs:text-[14px] text-[12px] text-[#90A3BF]`}
                      >
                        CEO at Amazon
                      </h2>
                    </div>
                  </div>

                  <div className="w-[128px]">
                    <h2
                      className={`${PlusJakartaSans500.className} xs:text-[14px] text-[10px] text-[#90A3BF] ml-[40px] mt-2`}
                    >
                      21 July 2022
                    </h2>
                    <div className="flex mt-1 ml-[40px]">
                      <IoIosStar className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar className="text-[#FBAD39] xs:text-[16px] text-[12px]" />
                      <IoIosStar className="text-[#90A3BF] xs:text-[16px] text-[12px]" />
                    </div>
                  </div>
                </div>

                <div className="w-full mt-3 overflow-hidden">
                  <p
                    className={`${PlusJakartaSans500.className} text-[12px] text-[#596780] break-words xs:mt-0 mt-5`}
                  >
                    We are very happy with the service from the MORENT App. Morent has a low
                    price and also a large variety of cars with good and comfortable
                    facilities. In addition, the service provided by the officers is also
                    very friendly and very polite.
                  </p>
                </div>
              </div>



            </div>
          </div>
          {/* Cars Section (Start) */}

          <div className=" mt-5 grid xl:grid-cols-3 gap-2 justify-center grid-cols-1 px-4 py-5">
            {/* Card 1 */}
            <div className="w-full  p-4 bg-white rounded-lg shadow-lg">
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
                <Image
                  src={first}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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

                <Link href={`/cars/${details}/payment`}>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
                </Link>
              </div>
             
            </div>

            {/* Card 2 */}
            <div className="w-full xl:mt-0 mt-3  p-4 bg-white rounded-lg shadow-lg">
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
                <Image
                  src={NissanGtR1}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    4 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $80.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $100.00
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full xl:mt-0 mt-3  p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  Rolls-Royce
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                Sport
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={rollsRoyal}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
            <div className="w-full  xl:mt-0 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  All New Rush
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                SUV
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={rush}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    6 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $72.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
              <div
                className={`${PlusJakartaSans700.className} text-[14px] text-[#90A3BF] line-through mt-[-10px] `}
              >
                $80.00
              </div>
            </div>

            {/* Card 5 */}
            <div className="w-full xl:mt-0 mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  CR - V
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                SUV
              </h2>
              <div className="w-full flex justify-center mt-8">
                <Image
                  src={crv}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
              </div>
              <div className="flex justify-between items-center mb-6 mt-6">
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
                    6 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $80.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
             
            </div>

            {/* Card 6 */}
            <div className="w-full xl:mt-0 mt-3 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  All New Terios
                </h1>
                <MdFavorite size={24} className="text-[#ED3F3F]" />
              </div>
              <h2
                className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
              >
                SUV
              </h2>
              <div className="w-full flex justify-center my-6">
                <Image
                  src={terios}
                  alt="Rolls Royce"
                  height={300}
                  width={300}
                  className="w-[232px]"
                />
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
                    6 People
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1
                  className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
                >
                  $74.00/ <span className="text-[14px] text-[#90A3BF]">day</span>
                </h1>
                <button
                  className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[16px] w-[116px] h-[44px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
                >
                  Rent Now
                </button>
              </div>
             
            </div>
          </div>
          {/* Cars Section (End) */}
        </div>
      </div>

      {/* Footer */}
<Footer/>
    </div>
  );
};

export default Detail;
