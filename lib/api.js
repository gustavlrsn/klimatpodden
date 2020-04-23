import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const postsDirectory = join(process.cwd(), "content/posts");
const pagesDirectory = join(process.cwd(), "content/pages");

export const postsPerPage = 10;

export function getPageSlugs() {
  return fs
    .readdirSync(pagesDirectory)
    .map((name) => name.substring(0, name.length - 3));
}

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((name) => name.substring(0, name.length - 3));
}

export async function getPageBySlug(slug) {
  const fullPath = join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content);

  return { data, html, slug };
}

// export function getPageDataBySlug(slug) {
//   const fullPath = join(pagesDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data } = matter(fileContents);
//   return { attributes: data };
// }

export async function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content);
  return { data: { ...data, date: data.date.toString() }, html, slug };
}

export async function getPosts(page) {
  const indexMin = (page - 1) * postsPerPage;
  const indexMax = indexMin + postsPerPage;

  const slugs = getPostSlugs();
  const allPosts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );

  const sortedAndFilteredPosts = allPosts
    .sort(function (a, b) {
      return new Date(b.data.date) - new Date(a.data.date);
    })
    .filter((x, index) => index >= indexMin && index < indexMax);

  return {
    posts: sortedAndFilteredPosts,
    totalPages: Math.ceil(allPosts.length / postsPerPage),
  };
}

// export async function getPages() {
//   const slugs = getPageSlugs();
//   const allPages = await Promise.all(
//     slugs.map(async (slug) => getPageDataBySlug(slug))
//   );

//   //   const sortedAndFilteredPosts = allPosts
//   //     .sort(function (a, b) {
//   //       return new Date(b.attributes.date) - new Date(a.attributes.date);
//   //     })
//   //     .filter((x, index) => index >= indexMin && index < indexMax);
//   console.log({ allPages });
//   return allPages;
// }
