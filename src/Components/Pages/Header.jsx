import HeaderImg from "../../assets/header.png";
import { TypeAnimation } from "react-type-animation";
import SocialLink from "./SocialLink";
import { IoMdCloudDownload } from "react-icons/io";
import AminulPDF from "../../assets/Aminul.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../App.css";

export default function Header() {
  // Initialize AOS in useEffect to ensure it runs on component mount
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="bg-gray-950 md:h-[85vh] header" id="home">
      <div className="md:grid grid-cols-5 justify-around p-5 items-center text-white">
        <div className="col-span-3 md:mt-10" data-aos="fade-up">
          <div className="text-center">
            <h2
              className="text-3xl md:text-5xl font-bold mb-2"
              data-aos="fade-up"
            >
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Hi
              </span>{" "}
              <span>I'M Aminul</span>
            </h2>
            <h2
              className="text-2xl mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Front-End Web Developer
            </h2>

            <h2
              className="md:text-2xl mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Crafting Seamless Front-End Experiences with Modern Web
              Technologies.
            </h2>
          </div>
          <div
            className="flex gap-2 text-3xl justify-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2>I'm Expert In</h2>
            <h2 className="text-yellow-400 uppercase">
              <TypeAnimation
                sequence={[
                  "HTML5",
                  1000,
                  "CSS3",
                  1000,
                  "Tailwind CSS",
                  1000,
                  "JAVASCRIPT",
                  1000,
                  "REACT",
                  1000,
                  "REDUX",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div className="py-5" data-aos="fade-up" data-aos-delay="900">
            <SocialLink />
          </div>
          <div
            className="flex justify-center mt-5"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <a href={AminulPDF} download="Aminul.pdf">
              <button className="btn btn-error text-white text-center mb-5">
                <IoMdCloudDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="md:mt-12 col-span-2" data-aos="zoom-in">
          <img
            src={HeaderImg}
            alt=""
            className="rounded-full bg-gray-950 border-gray-800 border-b-2 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
