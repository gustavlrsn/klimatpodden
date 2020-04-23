import Pagination from "./Pagination";
import moment from "moment";
import Link from "next/link";

export default ({ posts, currentPage, totalPages }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <div>
        {posts.map(({ data, html, slug }) => {
          return (
            <div
              className="bg-white px-5 py-4 mb-16 rounded border shadow-sm post"
              key={slug}
            >
              <Link href="/[slug]" as={`/${slug}`}>
                <a className="title text-black">
                  <h1 className="">{data.title}</h1>
                </a>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <span className="text-sm text-gray-700 mt-4 block">
                Publicerat {moment(data.date).format("MMM D, YYYY")}
              </span>
            </div>
          );
        })}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};
