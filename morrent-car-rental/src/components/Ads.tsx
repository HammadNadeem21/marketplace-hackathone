import React from "react";

//   Images
import Image from "next/image";
import Ad1Image from "../../public/Ad1Image.png";
import Ad2Image from "../../public/Ad2Image.png";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
const PlusJakartaSans600 = Plus_Jakarta_Sans({
  weight: "600",
  display: "swap",
  subsets: ["latin"],
});
const PlusJakartaSans500 = Plus_Jakarta_Sans({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
});

const Ads = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container lg:px-5 md:px-2 xs:px-4 px-8 py-16 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 xs:-m-4 -m-12">
          {/* Ad 1 (Start)*/}
          <div className="xl:w-[640px] w-full p-4">
            <div className="bg-[url(/Ad1.jpeg)] bg-cover h-[360px] p-6 rounded-lg ">
              <div
                className="xl:w-[284px] lg:w-[240px] xl:h-[200px] lg:h-[180px]
              xs:h-[150px] h-[120px] text-white"
              >
                <div className="lg:w-[272px] md:w-[250px] w-[272px] xs:h-[96px] h-[50px]">
                  <h1
                    className={`${PlusJakartaSans600.className} xl:text-[32px] lg:text-[26px] md:text-[22px] xs:text-[32px] text-[16px]`}
                  >
                    The Best Platform for Car Rental
                  </h1>
                </div>

                <div className="lg:w-[284px] md:w-[244px] w-[284px] lg:h-[48px]  lg:mt-[30px] xs:mt-[10px] mt-0">
                  <p
                    className={`${PlusJakartaSans500.className} lg:text-[16px] text-[12px]`}
                  >
                    Ease of doing a car rental safely and reliably. Of course at
                    a low price.
                  </p>
                </div>
              </div>

              <Link href={'/category'}>
              <button
                className={`${PlusJakartaSans600.className} text-[16px] text-white w-[122px] h-[44px] bg-[#3563E9] rounded-[4px] lg:mt-0 md:mt-[20px] xs:mt-[30px] mt-[35px] cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
              >
                Rental Car
              </button></Link>

              <div className="xl:w-[406px] lg:w-[350px] h-[106px] lg:ml-[110px] md:ml-[0px] xs:ml-[110px] lg:mt-[-20px] md:mt-[10px] xs:mt-[-10px] mt-[30px] ml-[30px]">
                <Image src={Ad1Image} alt="Ad1-Img" />
              </div>
            </div>
          </div>
          {/* Ad 1 (Start)*/}


          {/* Ad 2 (Start)*/}
          <div className="xl:w-[640px] w-full p-4">
            <div className="bg-[url(/Ad2.jpeg)] bg-cover h-[360px] p-6 rounded-lg ">
              <div
                className="xl:w-[284px] lg:w-[240px] xl:h-[200px] lg:h-[180px]
              xs:h-[150px] h-[120px] text-white"
              >
                <div className="lg:w-[292px] md:w-[250px] w-[292px] xs:h-[96px] h-[50px]">
                  <h1
                    className={`${PlusJakartaSans600.className} xl:text-[32px] lg:text-[26px] md:text-[22px] xs:text-[32px] text-[16px]`}
                  >
                    Easy way to rent a car at a low price
                  </h1>
                </div>

                <div className="lg:w-[284px] md:w-[244px] w-[284px] lg:h-[48px]  lg:mt-[30px] xs:mt-[10px] mt-0">
                  <p
                    className={`${PlusJakartaSans500.className} lg:text-[16px] text-[12px]`}
                  >
                    Providing cheap car rental services and safe and comfortable
                    facilities.
                  </p>
                </div>
              </div>

              <Link href={'/category'}>

              <button
                className={`${PlusJakartaSans600.className} text-[16px] text-white w-[122px] h-[44px] bg-[#54A6FF] rounded-[4px] lg:mt-0 md:mt-[20px] xs:mt-[30px] mt-[35px] cursor-pointer hover:bg-[#002fbb] transition-all duration-300`}
              >
                Rental Car
              </button>
              </Link>

              <div className="xl:w-[406px] lg:w-[350px] h-[106px] lg:ml-[150px] md:ml-[0px] xs:ml-[110px] lg:mt-[-20px] md:mt-[10px] xs:mt-[-10px] mt-[30px] ml-[30px]">
                <Image src={Ad2Image} alt="Ad1-Img" />
              </div>
            </div>
          </div>
          {/* Ad 2 (End)*/}

        </div>
      </div>
    </section>
  );
};

export default Ads;
