const path = require("path");

//Blogs from Contentful
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("./src/templates/blogTemplate.js");

  //Blogs from Contentful
  const blogSlugs = await graphql(`
    query {
      allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  blogSlugs.data.allContentfulBlogs.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blogs/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  //Resources
  const resourceTemplate = path.resolve("./src/templates/resourcesTemplate.js");
  const resourceSlugs = await graphql(`
    query {
      allContentfulResources {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  resourceSlugs.data.allContentfulResources.edges.forEach((edge) => {
    createPage({
      component: resourceTemplate,
      path: `/resources/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
