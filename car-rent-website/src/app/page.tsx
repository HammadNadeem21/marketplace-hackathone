import Ads from "@/components/Ads";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PickUp from "@/components/PickUp";
import Popular from "@/components/Popular";
import Recomended from "@/components/Recomended";


export default function Home() {
  return (
   <div>
    
     {/* Navbar */}
     <Navbar/>
     
   
{/* Ads */}
<Ads/>

{/* Pick Up */}
<PickUp/>

{/* Popular Cars */}
   <Popular/>

   {/* Recomended Cars */}
   <Recomended/>

    {/* Footer */}
    <Footer/>
   </div>
  );
}
