"use client";

import React from "react";
import Image from "next/image";
import { FaRegCircleRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="py-12">
          <h1 className="text-4xl font-semibold  ">
            Everything
            <br />
            is better
            <br />
            with a&nbsp;
            <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-4 text-gray-500 text-sm">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary text-white px-6 py-2 rounded-full flex items-center gap-2 uppercase text ">
              Order now
              <FaRegCircleRight />
            </button>
            <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold ">
              Learn more
              <FaRegCircleRight />
            </button>
          </div>
        </div>

        <div className=" relative">
          <Image
            src={"/images/pizza_hero.png"}
            layout="fill"
            objectFit="contain"
            alt="pizza"
          />
        </div>
      </section>
    </>
  );
}
