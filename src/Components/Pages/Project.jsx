import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Details from "./Details";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState({}); // Modal data state

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));

    // Initialize AOS
    AOS.init({ duration: 1000, once: true }); // Animation duration and trigger it once
  }, []);

  return (
    <div className="py-6 bg-gray-950" id="project">
      <h1 className="text-center bg-gradient-to-r from-violet-400 to-yellow-400 bg-clip-text text-transparent text-3xl md:text-5xl font-bold py-3">
        My Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map((project) => {
          const {
            id,
            name,
            img,
            live_site_url,
            description,
            github_repository,
            technologies,
            features,
          } = project;

          return (
            <div
              key={id}
              className="group relative h-[400px] bg-white shadow rounded-lg overflow-hidden"
              data-aos="fade-up" // AOS animation for the project card
            >
              <img
                src={img.url}
                alt={img.alt_text}
                className="object-cover transition-transform duration-300 group-hover:scale-105 w-full "
              />

              <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h4 className="text-white font-semibold text-lg">{name}</h4>
                <p className="text-gray-300 text-sm px-2">{description}</p>
                <div className="mt-3">
                  <a
                    href={live_site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 mr-2 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    View Live Link
                  </a>
                  <a
                    href={github_repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Github Repo
                  </a>
                  <button
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal(); // Ensure the ID matches your modal
                      setModalData({
                        img,
                        live_site_url,
                        description,
                        github_repository,
                        technologies,
                        features,
                      });
                    }}
                    className="block w-full mt-3 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pass modalData as props to Details */}
      <Details modalData={modalData} />
    </div>
  );
};

export default Project;
