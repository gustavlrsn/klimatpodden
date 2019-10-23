import React from "react";
import Link from "next/link";
import moment from "moment";

import Nav from "../components/nav";
import Head from "../components/head";
import GlobalStyle from "../components/globalStyle";
import Pagination from "../components/Pagination";
import importBlogPosts from "../lib/importBlogPosts";

const Home = ({ posts, nav, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Klimatpodden" />
      <Nav nav={nav} />
      <GlobalStyle />

      <div className="content">
        {posts.map(({ attributes, html, slug }) => {
          return (
            <div className="post" key={slug}>
              <Link href="/[slug]" as={`/${slug}`}>
                <a className="title">
                  <h1>{attributes.title}</h1>
                </a>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <span className="date">
                Publicerat {moment(attributes.date).format("MMM D, YYYY")}
              </span>
            </div>
          );
        })}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

Home.getInitialProps = async ({ query: { page = 1 } }) => {
  const { posts, totalPages } = await importBlogPosts(page);
  return { posts, currentPage: page, totalPages };
};

export default Home;
