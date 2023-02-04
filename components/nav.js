import React, { useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const css = {
  link:
    "mx-3 sm:mx-1 py-2 px-2 block rounded hover:bg-gray-200 font-medium text-lg",
};

const Nav = ({ router, nav }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sm:py-6 max-w-screen-md mx-auto flex flex-col">
      <div className="flex px-5 w-full items-center justify-between sm:justify-center">
        <Link href="/">
          <a>
            <img
              id="logo"
              src="/klimatpodden-logo.svg"
              className="my-6 w-40 sm:w-64"
            />
          </a>
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="p-1 my-1 block text-gray-700 hover:text-black focus:outline-none rounded hover:bg-gray-300 focus:bg-gray-300"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:block sm:flex mb-4 justify-center`}
      >
        <Link href="/">
          <a
            className={`${css.link} ${
              router.pathname === "/" && "bg-gray-200"
            }`}
          >
            Avsnitt
          </a>
        </Link>
        {nav.map(({ title, slug }, i) => (
          <Link href="/[slug]" as={`/${slug}`} key={slug}>
            <a
              className={`${css.link} ${
                router.query.slug === slug && "bg-gray-200"
              }`}
            >
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default withRouter(Nav);
