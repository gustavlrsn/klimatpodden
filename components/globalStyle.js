const GlobalStyle = () => (
  <style jsx global>{`
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background: #f7f7f2;
      margin: 0;
      margin-top: 50px;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
      font-size: 20px;
    }

    #logo {
      transform: rotate(2deg);
      transition: 100ms transform ease-in-out;
    }

    #logo:hover {
      transform: rotate(-1deg);
    }

    a {
      color: #001665;
    }

    a.title {
      text-decoration: none;
      color: #000;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .post {
      max-width: 800px;
      line-height: 1.5;
      margin: 50px 10px;
      background: #ffffff;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
      padding: 25px;
      overflow: hidden;
      color: rgba(14, 30, 37, 0.9);
    }

    .post.stotta {
      display: flex;
      padding: 0;
    }

    .post.stotta div {
      padding: 25px;
    }

    .post h1 {
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
    .post .date {
      font-size: 14px;
      display: block;
      color: rgba(0, 0, 0, 0.6);
    }
  `}</style>
);

export default GlobalStyle;
