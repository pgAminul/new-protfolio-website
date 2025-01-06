import React, { useState, useEffect } from "react";
import aboutMeData from "../../../public/About.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="border-t-2 border-red-500 bg-gradient-to-r from-stone-900 to-slate-900 about"
      id="aboutMe"
    >
      <h2
        className="bg-gradient-to-r from-stone-300 to-yellow-400 bg-clip-text text-transparent text-4xl font-bold border-b w-fit md:text-5xl mx-auto py-4 border-white text-center"
        data-aos="fade-down" // Fade down when entering the screen
      >
        About Me
      </h2>
      <div
        className={`${
          showFullText ? "block" : "grid md:grid-cols-12"
        } items-center md:items-start md:space-x-8 p-6 text-white`}
        data-aos="fade-up" // Fade up when entering the screen
        data-aos-delay="300"
      >
        <div
          className="col-span-2 "
          data-aos="zoom-in" // Zoom in effect when the image comes into view
          data-aos-delay="500"
        >
          <img
            src={aboutMeData.image}
            alt="Aminul Islam"
            className={`md:w-48 md:h-48   ${
              showFullText
                ? "w-[300px] h-[300px] bg-yellow-950 mx-auto"
                : "rounded-full bg-slate-50 mx-auto"
            } object-cover shadow-lg`}
          />
        </div>
        <div
          className="mt-6 md:mt-0 text-center md:text-left col-span-10 space-y-4"
          data-aos="fade-left" // Fade in from the left side when it comes into view
          data-aos-delay="700"
        >
          <h2 className="text-3xl font-bold text-yellow-500">
            {aboutMeData.name}
          </h2>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-fuchsia-200 to-yellow-400 bg-clip-text text-transparent">
            {aboutMeData.title}
          </h3>
          <p className="text-left">
            {showFullText
              ? aboutMeData.fullDescription
              : aboutMeData.shortDescription}
          </p>
          <button
            className="text-red-600 hover:underline focus:outline-none"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? "" : "Read More"}
          </button>

          {showFullText && (
            <>
              <div
                data-aos="fade-up" // Fade-up animation for hobbies section
                data-aos-delay="900"
              >
                <h4 className="text-xl font-semibold mt-4">Hobbies</h4>
                <ul className="list-disc list-inside">
                  {aboutMeData.hobbies.map((hobby, index) => (
                    <li className="text-left" key={index}>
                      {hobby}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-aos="fade-right" // Fade-right animation for formal details section
                data-aos-delay="1100"
              >
                <h4 className="text-xl font-semibold mt-4">Formal Details</h4>
                <ul className="list-disc list-inside">
                  {aboutMeData.formalDetails.map((detail, index) => (
                    <li className="text-left" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-aos="fade-left" // Fade-left animation for informal details section
                data-aos-delay="1300"
              >
                <h4 className="text-xl font-semibold mt-4">Informal Details</h4>
                <ul className="list-disc list-inside">
                  {aboutMeData.informalDetails.map((detail, index) => (
                    <li className="text-left" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="text-red-600 hover:underline focus:outline-none"
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? "Show Less" : ""}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
