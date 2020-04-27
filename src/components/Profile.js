import React from "react";
import PropTypes from "prop-types";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Img from "gatsby-image";

const Profile = ({ imgSrc }) => (
  <div className="d-flex flex-column align-items-center justify-content-center flex-fill text-color">
    <div style={{ maxWidth: 500 }}>
      <Img className="profile-pic rounded-circle" fluid={imgSrc} />
      <h1 className="mt-3 text-center font-weight-bold">Kyle Gray</h1>
      <aside className="text-center">
        Software Engineer{" "}
        <span role="img" aria-label="construction worker">
          👷🏻‍♂️
        </span>
      </aside>
      <div className="d-flex flex-row justify-content-between w-100 mt-3 border-top pt-3">
        <a
          aria-label="email"
          className="text-color"
          href="mailto:kgray1497@gmail.com"
        >
          <FaEnvelope aria-hidden="true" size={25} />
        </a>
        <a
          aria-label="twitter"
          className="text-color"
          href="https://twitter.com/kyle_a_gray"
        >
          <FaTwitter aria-hidden="true" size={25} />
        </a>
        <a
          aria-label="github"
          className="text-color"
          href="https://github.com/GoPro16"
        >
          <FaGithub aria-hidden="true" size={25} />
        </a>
        <a
          aria-label="linkedin"
          className="text-color"
          href="https://www.linkedin.com/in/kyle-gray16/"
        >
          <FaLinkedin aria-hidden="true" size={25} />
        </a>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  imgSrc: PropTypes.string,
};

export default Profile;
