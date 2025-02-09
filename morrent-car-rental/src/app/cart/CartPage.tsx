"use client";

import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";

import React from "react";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);

  // price modification
  const updatedArray = cartArray.map((item) => ({
    ...item,
    pricePerDay: parseFloat(
      item.pricePerDay.replace("$", "").replace("/day", "")
    ),
  }));

  //   for total bill
  const total = updatedArray.reduce((total, arr) => {
    return total + arr.pricePerDay * arr.quantity;
  }, 0);

  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* items */}
        <div className="col-span-2">
          {/* Cart Card */}
          <CartCard />
        </div>

        {/* summary */}
        <div className=" p-5 ">
          <div className="bg-black/5 p-5 rounded-xl">
            {/* Heading */}
            <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-black">
              order summary
            </h2>

            {/* Divider */}
            <div className="bg-black/50 h-[1px] mt-1 mb-1"></div>

            {/* Pricing */}
            <div className="text-sm font-medium tracking-tight text-gray-600">
              {/* Product Prices */}
              <div className="flex items-center justify-between capitalize mt-1">
                <h2>sub total</h2>
                <h2>${total}</h2>
              </div>

              {/* Delivery Charges */}
              <div className="flex items-center justify-between capitalize">
                <h2>driver charges</h2>
                <h2>TBD</h2>
              </div>

              {/* services charges */}
              <div className="flex items-center justify-between capitalize">
                <h2>fuel charges</h2>
                <h2>TBD</h2>
              </div>
            </div>
            {/* Divider */}
            <div className="bg-black/50 h-[1px] mt-1 mb-1"></div>
            {/* Extimated total */}
            <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tighter text-black mt-1 mb-1">
              <h2>estimated total</h2>
              <h2>${total}</h2>
            </div>
            {/* Divider */}
            <div className="bg-black/50 h-[1px] mt-1 mb-1"></div>
            {/* checkout button */}
            <div className="flex items-center justify-center w-full ">
              <Button className="hover:bg-[#002fbb] bg-[#3563E9] duration-300 text-white  scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl mt-1 mb-2">
                proceed to checkout
              </Button>
            </div>
            {/* Divider */}
            <div className="bg-black/50 h-[1px] mt-0 mb-1"></div>
            {/* note */}
            <p className="text-xs font-semibold tracking-tighter text-black w-[97%] text-center italic mt-2">
              {`*Delivery charges & fuel charges will be finalized at checkout.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
