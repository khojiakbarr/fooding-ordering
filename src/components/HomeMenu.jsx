import Image from "next/image";
import React from "react";
import MenuItem from "./Menu/MenuItem";
import SectionHeaders from "./layout/SectionHeaders";

export default function HomeMenu() {
  return (
    <section className=" ">
      <div className="relative">
        <div className="h-48 absolute w-48 left-[-130px] top-[-40px] -z-10">
          <Image
            src={"/images/Sallat.png"}
            layout="fill"
            objectFit="contain"
            alt="sallad"
          />
        </div>
        <div className="h-48 absolute w-48 right-[-130px] top-[-40px] -z-10">
          <Image
            src={"/images/Sallat.png"}
            layout="fill"
            objectFit="contain"
            alt="sallad"
          />
        </div>
      </div>
      <SectionHeaders SubHeader={"Check our"} mainHeader={"Menu"} />

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
