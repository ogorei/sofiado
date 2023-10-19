import 'styles/globals.css';
import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";


export default function App({ Component, pageProps }) {
  return (
      <MantineProvider>
        <Head>
          <title>ソフィア°</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
  )
}
