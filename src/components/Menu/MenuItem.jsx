import React from "react";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25">
      <div className="text-center ">
        <img
          className="max-h-auto max-h-24 mx-auto block"
          src="/images/pizzaP.png"
          alt="pizza"
        />
      </div>
      <h4 className=" text-xl font-semibold my-2  mt-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <button className="bg-primary text-white rounded-full px-6 py-2 mt-4">
        Add to card $12
      </button>
    </div>
  );
}
