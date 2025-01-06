import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLink() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 mt-4">
        <a
          href="https://www.facebook.com/AminulislamShowrov12/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://x.com/aminul_islam_S"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-aminul-islam-showrov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/aminul_islam_showrov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-600 transition duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
