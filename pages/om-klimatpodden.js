import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import markdown from "../content/pages/om-klimatpodden.md";
import GlobalStyle from "../components/globalStyle";

const Klimatpodden = () => {
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

export default Klimatpodden;
