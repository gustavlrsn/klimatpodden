import Link from "next/link";

const linkResolver = page => {
  if (page == 1)
    return {
      href: "/"
    };
  return {
    href: `/?page=${page}`,
    as: `/page/${page}`
  };
};

export default ({ currentPage, totalPages }) => {
  const pages = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <>
      <ul>
        {pages.map(page => (
          <li key={page}>
            <Link {...linkResolver(page)}>
              <a className={page == currentPage ? "active" : ""}>{page}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 40px 0;
          justify-content: center;
        }
        li {
          margin: 5px;
        }
        a {
          text-decoration: none;
          padding: 10px 15px;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          transition: 100ms border-color, 100ms color;
          color: rgba(0, 0, 0, 0.5);
        }

        a:hover {
          border-color: #001665;
          color: #001665;
        }

        a.active {
          border-color: #001665;
          color: #001665;
        }
      `}</style>
    </>
  );
};
