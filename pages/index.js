import React from "react";
import Link from "next/link";
import moment from "moment";

import Nav from "../components/nav";
import Head from "../components/head";
import Pagination from "../components/Pagination";
import importBlogPosts from "../lib/importBlogPosts";

const Home = ({ posts, nav, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Klimatpodden" />
      <Nav nav={nav} />

      <div className="max-w-screen-md mx-auto">
        <div>
          {posts.map(({ attributes, html, slug }) => {
            return (
              <div
                className="bg-white px-5 py-4 mb-16 rounded border shadow-sm post"
                key={slug}
              >
                <Link href="/[slug]" as={`/${slug}`}>
                  <a className="title text-black">
                    <h1 className="">{attributes.title}</h1>
                  </a>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <span className="text-sm text-gray-700 mt-4 block">
                  Publicerat {moment(attributes.date).format("MMM D, YYYY")}
                </span>
              </div>
            );
          })}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
        {/* <div>
          <div className="bg-white rounded shadow-sm p-4">
            <h3 className="text-sm text-gray-800 mb-2 uppercase font-semibold">
              Den viktigaste berättelsen
            </h3>
            <p className="mb-3 text-sm text-gray-800">
              Jag är oroad. Upprörd. Klimatförändringarna ställer allt på ända.
            </p>
            <p className="mb-3 text-sm text-gray-800">
              Jag är förvånad över medias näst intill obefintliga bevakning och
              politikernas ointresse att diskutera den största utmaningen.
              Samtidigt stöter jag allt oftare på medmänniskor som engagerar sig
              på olika sätt. De inger hopp!
            </p>
            <p className="mb-3 text-sm text-gray-800">
              I Klimatpodden får du möta aktivister, forskare, ekobeställare,
              entreprenörer och andra som agerar för att stoppa
              klimatförändringarna.
            </p>
            <img className="mb-3" src="/img/img_1277-1-1024x683.jpg" />
            <p className="text-sm text-gray-800">
              Ragnhild Larsson, producent och redaktör för Klimatpodden
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

Home.getInitialProps = async ({ query: { page = 1 } }) => {
  const { posts, totalPages } = await importBlogPosts(page);
  return { posts, currentPage: page, totalPages };
};

export default Home;
