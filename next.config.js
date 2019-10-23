const fs = require("fs");

module.exports = {
  exportPathMap: async () => {
    const pageSlugs = fs
      .readdirSync("./content/pages/")
      .map(fileName => fileName.substring(0, fileName.length - 3));

    const postSlugs = fs
      .readdirSync("./content/posts/")
      .map(fileName => fileName.substring(0, fileName.length - 3));

    const regularPages = [...pageSlugs, ...postSlugs].reduce(
      (pages, slug) => ({
        ...pages,
        [`/${slug}`]: {
          page: "/[slug]",
          query: { slug }
        }
      }),
      {}
    );

    let paginationPages;
    const numberOfPages = Math.ceil(postSlugs.length / 10);

    for (let i = 1; i <= numberOfPages; i++) {
      paginationPages = {
        ...paginationPages,
        [`/page/${i}`]: {
          page: "/",
          query: { page: i }
        }
      };
    }

    return {
      ...regularPages,
      ...paginationPages,
      "/": { page: "/", query: { page: 1 } }
    };
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  }
};
