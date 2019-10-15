const GlobalStyle = () => (
  <style jsx>{`
    @import url("https://fonts.googleapis.com/css?family=Crimson+Text:400,700&display=swap");
    body {
      background: #f7f7f2;
      margin: 0;
      margin-top: 50px;
      font-family: "Crimson Text", serif;
    }

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
  `}</style>
);

export default GlobalStyle;
