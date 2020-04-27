const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: require.resolve("./src/templates/blog-index.js"),
  });

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  const blogPost = path.resolve("./src/templates/blog-post.js");

  // Create index page
  createPage({
    path: "/",
    component: path.resolve("./src/templates/blog-index.js"),
  });

  if (result.errors) {
    console.log(result.errors);
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges || [];

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src/pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
