import React from "react";
import moment from "moment";
import Nav from "../components/nav";
import Head from "../components/head";
import GlobalStyle from "../components/globalStyle";
import firstParagraphFromHtmlString from "../lib/firstParagraph";

const Page = ({ markdown, page, nav, slug }) => {
  if (!markdown) return <div>404</div>;
  const { html, attributes } = markdown;
  return (
    <>
      <Head
        title={`${attributes.title} | Klimatpodden`}
        description={firstParagraphFromHtmlString(html)}
        slug={slug}
      />
      <Nav nav={nav} />
      <GlobalStyle />
      <div className="content">
        <div className={slug === "stotta" ? "post stotta" : "post"}>
          {!page && <h1>{attributes.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {!page && (
            <span className="date">
              Publicerat {moment(attributes.date).format("MMM D, YYYY")}
            </span>
          )}
          {slug === "stotta" && <img width="320" src="/static/img/swish.jpg" />}
        </div>
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
      markdown,
      slug
    };
  }

  try {
    markdown = await import(`../content/posts/${slug}.md`);
  } catch (err) {
    console.error(err);
  }
  return { markdown, slug };
};

export default Page;
