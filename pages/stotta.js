import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import markdown from "../content/pages/stotta.md";
import GlobalStyle from "../components/globalStyle";

const Stotta = () => {
  const { html, attributes } = markdown;

  return (
    <div>
      <Header />
      <Nav />
      <GlobalStyle />

      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default Stotta;
