"use client";
import React, { useEffect, useState } from "react";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});
// const PlusJakartaSans700 = Plus_Jakarta_Sans({
//   weight: "700",
//   display: "swap",
//   subsets: ["latin"],
// });
// const PlusJakartaSans500 = Plus_Jakarta_Sans({
//   weight: "500",
//   display: "swap",
//   subsets: ["latin"],
// });

import { Cars } from "../../types/cars";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import CarCard from "./CarCard";

const Popular = () => {
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
  const popularCars = car.filter((car) => car.tags.includes("popular"));

  return (
    <div>
      <section>
        <div className="container px-4 py-20 mx-auto">
          {/* Header */}
          <div
            className={`${PlusJakartaSans600.className} w-full h-[30px] mb-5 flex justify-between`}
          >
            <h1 className="text-[#90A3BF] text-[16px]">Popular Cars</h1>
            <button className="text-[#3563E9] text-[16px]">View All</button>
          </div>

      {/* Cards Container (Start)*/}

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
          </div>
      {/* Cards Container (End)*/}

        </div>
      </section>
    </div>
  );
};

export default Popular;
