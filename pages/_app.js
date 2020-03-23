import React from "react";
import App from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import importNav from "../lib/importNav";
import "../styles.css";

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

export default withGA("UA-7337696-13", Router)(MyApp);
