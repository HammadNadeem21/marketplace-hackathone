"use client";
import React, { useState } from "react";
import Image from "next/image";

// Icons
import { MdFavorite } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";

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

const CarCard = (props: {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  slug: string;
  _id: string;
  quantity: number;
}) => {
  // Add to Cart
  const [cartItem, setCartItem] = useState({
    _id: props._id,
    name: props.name,
    image: props.image,
    type: props.type,
    fuelCapacity: props.fuelCapacity,
    transmission: props.transmission,
    seatingCapacity: props.seatingCapacity,
    pricePerDay: props.pricePerDay,
    slug: props.slug,
    quantity: props.quantity,
  });

  const dispatch = useAppDispatch();

  return (
    <div className="w-full p-3 bg-white rounded-lg shadow-lg md:max-w-[320px]">
      <div className="flex justify-between items-center mt-2">
        <h1
          className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
        >
          {props.name}
        </h1>
        <MdFavorite size={24} className="text-[#ED3F3F]" />
      </div>
      <h2
        className={`${PlusJakartaSans500.className} text-[14px] text-[#90A3BF]`}
      >
        {props.type}
      </h2>
      <div className="w-full flex justify-center mt-2 mb-2 h-[120px]  px-[2px]">
        <Image
          src={props.image}
          alt={props.name}
          height={1000}
          width={1000}
          className="md:w-[85%] sm:w-[60%] xs:w-[65%] w-[75%] md:h-[75%] sm:h-[95%] xs:h-[90%] h-[85%] mt-2"
        />
      </div>
      <div className="flex justify-between items-center mb-6 mt-4">
        <div className="flex items-center">
          <BsFillFuelPumpFill size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
            {props.fuelCapacity}
          </p>
        </div>
        <div className="flex items-center">
          <TbSteeringWheel size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
            {props.transmission}
          </p>
        </div>
        <div className="flex items-center">
          <FaUserGroup size={24} className="text-[#90A3BF]" />
          <p
            className={`${PlusJakartaSans500.className} text-[#90A3BF] text-[15px] ml-2`}
          >
            {props.seatingCapacity}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1
          className={`${PlusJakartaSans700.className} text-[20px] text-[#1A202C]`}
        >
          {cartItem.pricePerDay}
        </h1>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <Link href={`/cars/${props.slug}`}>
          <button
            className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[14px] w-[100px] h-[40px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
          >
            Rent Now
          </button>
        </Link>

        <button
          className={`${PlusJakartaSans600.className} bg-[#3563E9] text-white text-[14px] w-[100px] h-[40px] rounded-sm cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
          onClick={() => dispatch(addToCart(cartItem))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CarCard;
