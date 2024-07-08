import React from "react";

export default function CoverCard() {
  return (
    <div className="pt-10">
      <div className="max-w-sm p-6 mt-20 bg-[#c1c3c57e]   rounded-lg shadow sm:max-w-[45vw] ">
        <h5 className="mb-2 max-w-[90%]  text-5xl font-extrabold  uppercase tracking-tight ml-16 text-[#515557] ">
          Investissez <br /> dans le confort , <br /> Investissez <br /> dans
          l'avenir
        </h5>
      </div>
      <button
      href="#"
      className="inline-flex mt-8 ml-[10%] uppercase items-center px-6 py-4 text-xl font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
      style={{
        background: "linear-gradient(270deg, #B88824 0%, #E1C550 39%, #CEA93B 74%, #B07A12 100%)"
      }}
    >
      voir plus
    </button>
    </div>
  );
}
