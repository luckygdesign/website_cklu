const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const newsPost = path.resolve('./src/templates/news-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulNews {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulNews.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/news/${post.node.slug}/`,
            component: newsPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
