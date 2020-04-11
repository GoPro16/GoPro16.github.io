import React from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Util } from "reactstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { useTheme } from "../components/theme";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className="profile-pic rounded-circle"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

const Link = ({ className, ...props }) => {
  const [, cssModule] = useTheme();

  return (
    <a className={Util.mapToCssModules(className, cssModule)} {...props} />
  );
};

const Profile = () => {
  const [, cssModule] = useTheme();

  return (
    <div
      className={Util.mapToCssModules(
        "d-flex flex-column align-items-center justify-content-center flex-fill text-color",
        cssModule
      )}
    >
      <div style={{ maxWidth: 500 }}>
        <Image />
        <h1 className="mt-3 text-center font-weight-bold">Kyle Gray</h1>
        <aside className="text-center">Software Engineer <span role="img" aria-label="construction worker">👷🏻‍♂️</span></aside>
        <div className="d-flex flex-row justify-content-between w-100 mt-3 border-top pt-3">
          <Link
            aria-label="email"
            className="text-color"
            href="mailto:kgray1497@gmail.com"
          >
            <FaEnvelope aria-hidden="true" size={25} />
          </Link>
          <Link
            aria-label="twitter"
            className="text-color"
            href="https://twitter.com/kyle_a_gray"
          >
            <FaTwitter aria-hidden="true" size={25} />
          </Link>
          <Link
            aria-label="github"
            className="text-color"
            href="https://github.com/GoPro16"
          >
            <FaGithub aria-hidden="true" size={25} />
          </Link>
          <Link
            aria-label="linkedin"
            className="text-color"
            href="https://www.linkedin.com/in/kyle-gray16/"
          >
            <FaLinkedin aria-hidden="true" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const IndexPage = () => (
  <Layout>
    <Profile />
    <SEO title="Home" lang="en" />
  </Layout>
);

export default IndexPage;
