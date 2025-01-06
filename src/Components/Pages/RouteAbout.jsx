import React, { useState } from "react";
import aboutMeData from "../../../public/About.json";

const RouteAbout = () => {
  return (
    <div className="border-t-2 pt-7 border-red-500  bg-gradient-to-r from-stone-900 to-slate-900">
      <h2 className="bg-gradient-to-r from-stone-300 to-yellow-400 bg-clip-text text-transparent text-4xl font-bold border-b w-fit md:text-5xl mx-auto py-4 border-white text-center">
        About Me
      </h2>
      <div className={` md:flex items-center md:space-x-8 p-6 text-white `}>
        <div className="col-span-2">
          <img
            src={aboutMeData.image}
            alt="Aminul Islam"
            className={`w-[480px] object-cover border-b-2 border-gray-500 `}
          />
        </div>
        <div className="mt-6 md:mt-0 text-left col-span-10 space-y-4">
          <h2 className="text-3xl font-bold text-yellow-500">
            {" "}
            {aboutMeData.name}
          </h2>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-fuchsia-200 to-yellow-400 bg-clip-text text-transparent">
            {aboutMeData.title}
          </h3>
          <p className="">aboutMeData.shortDescription</p>

          <>
            <div>
              <h4 className="text-xl font-semibold  mt-4">Hobbies</h4>
              <ul className="list-disc list-inside ">
                {aboutMeData.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold  mt-4">Formal Details</h4>
              <ul className="list-disc list-inside ">
                {aboutMeData.formalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold  mt-4">Informal Details</h4>
              <ul className="list-disc list-inside ">
                {aboutMeData.informalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default RouteAbout;
