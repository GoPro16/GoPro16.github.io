import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/Profile";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const imgSrc = data.placeholderImage.childImageSharp.fluid;

  return (
    <Layout>
      <div className="text-color">
        <Profile imgSrc={imgSrc} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
    placeholderImage: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
