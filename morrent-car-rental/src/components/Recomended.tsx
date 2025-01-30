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
  const recomendedCars = car.filter((car) => car.tags.includes("recommended"));
  return (
    <div>
      <section className="container px-4 py-24 mx-auto">
        {/* Header */}
        <div
          className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}
        >
          <h1 className="text-[#90A3BF] text-[16px]">Recommendation Cars</h1>
          <Link href={`/category`}>
            <button className="text-[#3563E9] text-[16px]">View All</button>
          </Link>
        </div>

        {/* Cards Container (Start)*/}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {recomendedCars.map((items) => (
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
        {/* Cards Container (End)*/}

        <div className=" flex justify-center mt-[100px]">
          <Link href={`/category`}>
            <button
              className={`${PlusJakartaSans500.className} w-[156px] h-[44px] rounded-[4px] px-[20px] py-[10px] bg-[#3563E9] text-white text-[14px] hover:bg-[#002fbb] transition-all duration-300`}
            >
              Show more cars
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Recomended;
