"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { urlFor } from "@/sanity/lib/image";
import { addCart, deleteItem, subtractCart } from "@/app/store/features/cart";



const CartCard = () => {
  // for gain cart item
  const cartArray = useAppSelector((state) => state.cart);

  // for delete cart item
  const dispatch = useAppDispatch();

  // price modification
  const updatedArray = cartArray.map((item) => ({
    ...item,
    pricePerDay: parseFloat(
      item.pricePerDay.replace("$", "").replace("/day", "")
    ),
  }));

  return (
    <>
      {updatedArray.length >= 1 &&
        updatedArray.map((item, i) => (
          <div key={i} className="xs:flex  grid grid-cols-1 p-10 ">
            {/* image */}
            <div className="w-[300px] h-[120px]  flex items-center justify-center">
              <Image
                src={item.image ? urlFor(item.image).url() : ""}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-[90%] h-[65%]"
              />
            </div>

            {/* some info */}
            <div className="flex px-5 justify-between items-center  w-full">
              <div>
                {/* title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-black">
                  {item.name}
                </h2>

                {/* Quantity button */}

                <div className="flex mt-2 items-center">
                  <Button
                    onClick={() => dispatch(subtractCart(item))}
                    className="group hover:bg-[#002fbb] bg-[#3563E9] text-white  w-fit h-fit rounded-xl text-xs duration-300"
                  >
                    <FaMinus className="h-2 w-2" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-2 text-sm font-semibold tracking-tight text-myBlackPara/80">
                    {item.quantity}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-[#002fbb] bg-[#3563E9] text-white  w-fit h-fit rounded-xl text-xs duration-300"
                  >
                    <FaPlus className="h-2 w-2 " />
                  </Button>
                </div>

                {/* Price & Delete (Mobile) */}
                <div className="sm:hidden flex flex-col  gap-3 mt-2">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-black">
                    <span>Price:&nbsp;</span>
                    {`$${item.pricePerDay * item.quantity}.00`}
                  </h3>

                  <FaTrash
                    onClick={() => dispatch(deleteItem(item.uuid))}
                    className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Price & Delete */}
            <div className="flex items-center">
              <div className="hidden sm:flex flex-col items-end gap-5 mt-4">
                <h3 className="text-sm font-semibold leading-none line-clamp-1 text-black">
                  <span>Price:&nbsp;</span>
                  {`$${item.pricePerDay * item.quantity}.00`}
                </h3>

                <FaTrash
                  onClick={() => dispatch(deleteItem(item.uuid))}
                  className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
