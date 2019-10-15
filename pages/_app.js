import React from "react";
import App from "next/app";

const importNav = async () => {
  const markdownFiles = require
    .context("../content/pages", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  const posts = await Promise.all(
    markdownFiles.map(async path => {
      const { attributes } = await import(`../content/pages/${path}`);
      return { ...attributes, slug: path.substring(0, path.length - 3) };
    })
  );
  return posts;
};

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const nav = await importNav();
    return { ...appProps, nav };
  }

  render() {
    const { Component, pageProps, nav } = this.props;
    return <Component {...pageProps} nav={nav} />;
  }
}

export default MyApp;
