// const path = require("path");

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const blogTemplate = path.resolve("./src/templates/blogTemplate.js");

//   //Blogs from Contentful
//   const blogSlugs = await graphql(`
//     query {
//       allContentfulBlog {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   blogSlugs.data.allContentfulBlog.edges.forEach((edge) => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     });
//   });
// };
