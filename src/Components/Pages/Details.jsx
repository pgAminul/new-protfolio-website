import React from "react";

const Details = ({ modalData }) => {
  const {
    img,
    live_site_url,
    description,
    github_repository,
    technologies,
    features,
  } = modalData;

  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box ">
        <button
          className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          ✕
        </button>
        {img && (
          <img
            src={img.url}
            alt={img.alt_text}
            className="rounded w-full mb-4"
          />
        )}
        <h2 className="text-xl font-bold">{description}</h2>
        <p className="text-gray-700 mt-2">{description}</p>

        {features && (
          <div className="mt-4">
            <h3 className="font-bold text-lg">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {technologies && (
          <div className="mt-4">
            <h3 className="font-bold text-lg">Technologies Used:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(technologies).map(([key, value], index) => (
                <li key={index}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          <a
            href={live_site_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Site
          </a>
          <a
            href={github_repository}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Github Repo
          </a>
        </div>
      </form>
    </dialog>
  );
};

export default Details;
