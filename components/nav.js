import React from "react";
import Link from "next/link";

const links = [].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <img id="logo" src="/static/klimatpodden-logo.png" width="220" />
    <ul>
      <li className="green">
        <Link href="/">
          <a>Hem</a>
        </Link>
      </li>
      <li className="blue">
        <Link href="/">
          <a>Om Klimatpodden</a>
        </Link>
      </li>
      <li className="pink">
        <Link href="/">
          <a>Stötta</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        background: #f7f7f2;
        margin: 0;
        margin-top: 50px;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      @import url("https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap");
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

        margin: 0px 8px;
        border-bottom: 3px solid transparent;
      }

      li.green:hover {
        border-color: #6fbd62;
      }
      li.blue:hover {
        border-color: #4dbbec;
      }
      li.pink:hover {
        border-color: #ea97d2;
      }
      a {
        font-family: "Crimson Text", serif;
        padding: 6px 0;
        color: #181818;
        font-weight: 300;
        text-decoration: none;
        font-size: 27px;
      }
    `}</style>
  </nav>
);

export default Nav;
