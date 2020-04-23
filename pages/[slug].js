import React from "react";
import moment from "moment";
import Head from "../components/head";
import firstParagraphFromHtmlString from "../lib/firstParagraph";

import {
  getPageSlugs,
  getPostSlugs,
  getPageBySlug,
  getPostBySlug,
} from "../lib/api";

const Page = ({ markdown }) => {
  if (!markdown) return <div>404</div>;
  const { html, data, slug } = markdown;
  return (
    <>
      <Head
        title={`${data.title} | Klimatpodden`}
        description={firstParagraphFromHtmlString(html)}
        slug={slug}
      />

      <div className="max-w-screen-md mx-auto">
        <div
          className={`bg-white px-5 py-4 mb-16 rounded border shadow-sm post overflow-hidden ${
            slug === "stotta" ? "sm:flex" : ""
          }`}
        >
          <div>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {data.date && (
              <span className="text-sm text-gray-700 mt-4 block">
                Publicerat {moment(data.date).format("MMM D, YYYY")}
              </span>
            )}
          </div>
          {slug === "stotta" && (
            <img
              className="sm:ml-4 sm:-mr-5 sm:-my-4"
              width="320"
              src="/img/swish.jpg"
            />
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const pageSlugs = getPageSlugs();

  if (pageSlugs.includes(slug)) {
    const page = await getPageBySlug(slug);

    return {
      props: {
        markdown: page,
      },
    };
  }

  const post = await getPostBySlug(slug);

  return {
    props: {
      markdown: post,
    },
  };
}

export async function getStaticPaths() {
  const pageSlugs = getPageSlugs();
  const postSlugs = getPostSlugs();

  const paths = [...pageSlugs, ...postSlugs].map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;
