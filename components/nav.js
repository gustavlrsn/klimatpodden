import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Nav = ({ router, nav }) => {
  const colors = ["green", "blue", "pink", "green"];

  return (
    <nav>
      <Link href="/">
        <a>
          <img
            id="logo"
            src="/static/klimatpodden-logo.svg"
            width="300"
            height="124.5"
          />
        </a>
      </Link>

      <ul>
        <li className={(router.asPath === "/" ? "active " : " ") + colors[0]}>
          <Link href="/">
            <a>Hem</a>
          </Link>
        </li>
        {nav.map(({ title, slug }, i) => (
          <li
            key={slug}
            className={
              (router.query.slug === slug ? "active " : " ") + colors[i + 1]
            }
          >
            <Link href="/[slug]" as={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        #logo {
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: center;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;

          margin: 0px 15px;
          border-bottom: 3px solid transparent;
        }

        li.green:hover,
        li.green.active {
          border-color: #6fbd62;
        }
        li.blue:hover,
        li.blue.active {
          border-color: #4dbbec;
        }
        li.pink:hover,
        li.pink.active {
          border-color: #ea97d2;
        }
        a {
          padding: 6px 0;
          color: #181818;
          font-weight: 400;
          letter-spacing: 0.6px;
          text-decoration: none;
          font-size: 22px;
        }
      `}</style>
    </nav>
  );
};

export default withRouter(Nav);
