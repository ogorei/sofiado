import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class _Document extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=M+PLUS+1p&display=swap"
            rel="stylesheet"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
