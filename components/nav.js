import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const links = [
  {
    href: "/",
    label: "Home",
    color: "green"
  },
  {
    href: "/om-klimatpodden",
    label: "Om Klimatpodden",
    color: "blue"
  },
  {
    href: "/stotta",
    label: "Stötta",
    color: "pink"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({ router }) => (
  <nav>
    <img
      id="logo"
      src="/static/klimatpodden-logo3.png"
      width="300"
      height="130"
    />
    <ul>
      {links.map(({ href, label, color }, key) => (
        <li
          key={key}
          className={color + (router.pathname === href ? " active" : "")}
        >
          <a href={href}>{label}</a>
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
        font-size: 27px;
      }
    `}</style>
  </nav>
);

export default withRouter(Nav);
