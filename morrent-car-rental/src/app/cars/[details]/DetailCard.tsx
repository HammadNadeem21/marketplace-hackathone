"use client"

import React, { useEffect, useState } from 'react'
import { Cars } from '../../../../types/cars';
import { client } from '@/sanity/lib/client';
import { allCars } from '@/lib/queries';
import CarCard from '@/components/CarCard';
import { urlFor } from '@/sanity/lib/image';

const DetailCard = () => {


      // fetch data from API
      const [car, setCar] = useState<Cars[]>([]);
      useEffect(() => {
        async function getData() {
          const fetchData: Cars[] = await client.fetch(allCars);
          setCar(fetchData);
        }
        getData();
      }, []);


  return (
    <div className=" mt-5 grid xl:grid-cols-3 gap-2 justify-center grid-cols-1 px-4 py-5">
            {car.map((items) => (
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
  )
}

export default DetailCard
