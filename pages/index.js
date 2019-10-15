import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import FormData from "form-data";
import GlobalStyle from "../components/globalStyle";

const importBlogPosts = async selectedPage => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../content/posts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  const thing = await Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
  const elementsPerPage = 10;
  const indexMin = selectedPage * elementsPerPage;
  const indexMax = indexMin + elementsPerPage;

  return thing
    .sort(function(a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.attributes.date) - new Date(a.attributes.date);
    })
    .filter((x, index) => index >= indexMin && index < indexMax);
};

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <Nav />
      <GlobalStyle />

      <div className="container">
        {posts.map(({ attributes, html, slug }) => {
          return (
            <div className="post" key={slug}>
              <h1 className="title">{attributes.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .title {
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          margin: 0;
          margin-bottom: 15px;
          width: 100%;
          line-height: 1.2;
          font-size: 30px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  console.log({ query });
  let page = query.page;
  if (!page) page = 0;
  const data = await importBlogPosts(page);
  return { posts: data };
};
export default Home;
