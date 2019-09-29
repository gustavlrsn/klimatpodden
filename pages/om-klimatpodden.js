import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import markdown from "../content/pages/om-klimatpodden.md";

const Klimatpodden = () => {
  const { html, attributes } = markdown;

  return (
    <div>
      <Header />
      <Nav />

      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {/* 
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap");
      `}</style> */}
    </div>
  );
};

export default Klimatpodden;
