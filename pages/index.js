import React from "react";
import Head from "../components/head";
import PostList from "../components/PostList";
import { getPosts } from "../lib/api";

const Home = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Klimatpodden" />

      <PostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
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
    </>
  );
};

export async function getStaticProps() {
  const page = 1;
  const { posts, totalPages } = await getPosts(page);

  return {
    props: {
      posts,
      totalPages,
      currentPage: page,
    },
  };
}

export default Home;
