import React from "react";

export default function SectionHeaders({ SubHeader, mainHeader }) {
  return (
    <div className="text-center">
      <h2 className="uppercase text-gray-600 font-semibold leading-4">
        {SubHeader}
      </h2>
      <h3 className="text-primary font-bold text-4xl italic mb-4">
        {mainHeader}
      </h3>
    </div>
  );
}
