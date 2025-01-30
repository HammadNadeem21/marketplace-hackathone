import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartPage from "./CartPage";
import { useAppSelector } from "../store/hooks";

const Cart = () => {


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <CartPage/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
