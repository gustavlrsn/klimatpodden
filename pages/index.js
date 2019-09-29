import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import FormData from "form-data";
import { URLSearchParams } from "url";

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../content/posts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Home = ({ posts }) => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="container">
        {posts.map(({ attributes, html, slug, soundcloud_embed }) => {
          console.log({ soundcloud_embed });
          return (
            <div className="post" key={slug}>
              <h1 className="title">{attributes.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: soundcloud_embed.html }}
              />
              {/* <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/681717674&color=%236fbd62&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe> */}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap");

        .container {
        }
        .post {
          max-width: 750px;
          margin: 50px auto;
          background: #ffffff;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
          padding: 20px 25px;
          font-size: 22px;
        }
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
    </div>
  );
};

Home.getInitialProps = async () => {
  const data = await importBlogPosts();
  const posts = data.map(async post => {
    let formData = new FormData();
    formData.append(
      "url",
      "https://soundcloud.com/klimatpodden/66-cecilia-linden-klimatkompensera-din-livsstil"
    );
    formData.append("maxheight", 166);
    formData.append("color", "6fbd62");
    const res = await fetch("https://soundcloud.com/oembed?format=json", {
      method: "POST",
      body: formData
    });
    return {
      ...post,
      soundcloud_embed: await res.json()
    };
  });

  return { posts: await Promise.all(posts) };
};
export default Home;
