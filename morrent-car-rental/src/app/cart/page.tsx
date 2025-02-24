import React from "react";
import Footer from "@/components/Footer";
import CartPage from "./CartPage";
import Navbar1 from "@/components/Navbar1";

const Cart = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar1 />
      
      <CartPage />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
