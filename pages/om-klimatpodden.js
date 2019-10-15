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

      <div className="post">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <style jsx>{`
        .post {
          max-width: 750px;
          margin: 50px auto;
          background: #ffffff;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
          padding: 20px 25px;
          font-size: 22px;
        }
        .post > h1 {
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          margin: 0;
          margin-bottom: 15px;
          width: 100%;
          line-height: 1.2;
          font-size: 30px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Klimatpodden;
