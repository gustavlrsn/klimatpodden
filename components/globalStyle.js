const GlobalStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap");
    body {
      background: #f7f7f2;
      margin: 0;
      margin-top: 50px;
      font-family: "Crimson Text", serif;
    }

    a {
      color: #001665;
    }

    .post {
      max-width: 750px;
      line-height: 30px;
      margin: 50px auto;
      background: #ffffff;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
      padding: 25px;
      font-size: 22px;
    }

    .post h1 {
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
      margin: 0;
      margin-bottom: 15px;
      width: 100%;
      line-height: 1.2;
      font-size: 30px;
      font-weight: 600;
    }
    .post img {
      max-width: 100%;
      height: auto;
    }
  `}</style>
);

export default GlobalStyle;
