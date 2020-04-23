import React from "react";
import Head from "../../components/head";
import PostList from "../../components/PostList";
import { getPosts, getPostSlugs, postsPerPage } from "../../lib/api";

const Home = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Klimatpodden" />

      <PostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export async function getStaticProps({ params: { page } }) {
  const { posts, totalPages } = await getPosts(page);

  return {
    props: {
      posts,
      totalPages,
      currentPage: page,
    },
  };
}

export async function getStaticPaths() {
  const postSlugs = getPostSlugs();

  const numberOfPages = Math.ceil(postSlugs.length / postsPerPage);

  let paths = [];

  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({
      params: { page: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export default Home;
