import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/index.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wire+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/unb4zfl.css?test=i"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
