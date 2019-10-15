export default async () => {
  const markdownFiles = require
    .context("../content/pages", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  const posts = await Promise.all(
    markdownFiles.map(async path => {
      const { attributes } = await import(`../content/pages/${path}`);
      return { ...attributes, slug: path.substring(0, path.length - 3) };
    })
  );
  return posts;
};
