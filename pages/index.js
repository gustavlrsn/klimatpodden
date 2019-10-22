import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import Link from "next/link";
import GlobalStyle from "../components/globalStyle";
import importBlogPosts from "../lib/importBlogPosts";

const Home = ({ posts, nav }) => {
  return (
    <>
      <Head title="Klimatpodden" />
      <Nav nav={nav} />
      <GlobalStyle />

      <div>
        {posts.map(({ attributes, html, slug }) => {
          return (
            <div className="post" key={slug}>
              <Link href="/[slug]" as={`/${slug}`}>
                <a>
                  <h1>{attributes.title}</h1>
                </a>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

Home.getInitialProps = async ({ query: { page = 1 } }) => {
  const data = await importBlogPosts(page);
  return { posts: data };
};

export default Home;
