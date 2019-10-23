import React from "react";
import moment from "moment";
import Nav from "../components/nav";
import Head from "../components/head";
import GlobalStyle from "../components/globalStyle";

const Page = ({ markdown, page, nav }) => {
  if (!markdown) return <div>404</div>;
  const { html, attributes } = markdown;
  return (
    <>
      <Head title={`${attributes.title} | Klimatpodden`} />
      <Nav nav={nav} />
      <GlobalStyle />

      <div className="post">
        {!page && <h1>{attributes.title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {!page && (
          <span className="date">
            Publicerat {moment(attributes.date).format("MMM D, YYYY")}
          </span>
        )}
      </div>
    </>
  );
};

Page.getInitialProps = async ({ query: { slug } }) => {
  let markdown;

  const pageSlugs = require
    .context("../content/pages", false, /\.md$/)
    .keys()
    .map(str => str.substring(2, str.length - 3));

  if (pageSlugs.includes(slug)) {
    markdown = await import(`../content/pages/${slug}.md`);
    return {
      page: true,
      markdown
    };
  }

  try {
    markdown = await import(`../content/posts/${slug}.md`);
  } catch (err) {
    console.error(err);
  }
  return { markdown };
};

export default Page;
