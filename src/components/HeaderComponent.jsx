import React from "react";

import Image from "next/image";
import pic from "../../public/images/fallingIntoYourSmile.webp"

const HeaderComponent = () => {
  return (
    <div className="absolute inset-0 z-0">
         <Image src={pic} alt="image" className="absolute -z-10  w-full object-cover h-screen" />
        <div className="absolute w-full h-[100vh] bg-black -z-10 opacity-60 "></div>
      </div>
  );
};

export default HeaderComponent;
