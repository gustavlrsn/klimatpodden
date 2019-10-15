export default async page => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../content/posts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  const posts = await Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );

  const elementsPerPage = 10;
  const indexMin = page * elementsPerPage;
  const indexMax = indexMin + elementsPerPage;

  return posts
    .sort(function(a, b) {
      return new Date(b.attributes.date) - new Date(a.attributes.date);
    })
    .filter((x, index) => index >= indexMin && index < indexMax);
};
