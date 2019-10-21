const fs = require("fs");

module.exports = {
  exportPathMap: async () => {
    const pageSlugs = fs
      .readdirSync("./content/pages/")
      .map(fileName => fileName.substring(0, fileName.length - 3));

    const postSlugs = fs
      .readdirSync("./content/posts/")
      .map(fileName => fileName.substring(0, fileName.length - 3));

    const pages = [...pageSlugs, ...postSlugs].reduce(
      (pages, slug) =>
        Object.assign({}, pages, {
          [`/${slug}`]: {
            page: "/[slug]",
            query: { slug }
          }
        }),
      {}
    );

    return Object.assign({}, pages, {
      "/": { page: "/" }
    });
  },
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader"
    });
    return cfg;
  }
};
