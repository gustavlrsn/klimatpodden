import Head from "next/head";

export default ({
  title = "Klimatpodden",
  description = "I Klimatpodden möter du aktivister, forskare, entreprenörer och andra som agerar för att stoppa klimatförändringarna.",
  slug = ""
}) => (
  <Head>
    <title>{title}</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-config"
      content="/static/favicons/browserconfig.xml"
    />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#ffffff" />
    <meta
      property="og:image"
      content="https://klimatpodden.se/static/klimatpodden-og.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://klimatpodden.se/${slug}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content="https://klimatpodden.se/static/klimatpodden-og.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);
