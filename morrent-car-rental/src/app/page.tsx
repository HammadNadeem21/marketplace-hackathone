import Ads from "@/components/Ads";
import Footer from "@/components/Footer";
import Navbar1 from "@/components/Navbar1";
import PickUp from "@/components/PickUp";
import Popular from "@/components/Popular";
import Recomended from "@/components/Recomended";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar1 />

      {/* Ads */}
      <Ads />

      {/* Pick Up */}
      <PickUp />

      {/* Popular Cars */}
      <Popular />

      {/* Recomended Cars */}
      <Recomended />

      {/* Footer */}
      <Footer />
    </div>
  );
}
