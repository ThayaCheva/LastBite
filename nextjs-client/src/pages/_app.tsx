import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";

import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
const _Roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <main className={_Roboto.className}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </MantineProvider>
    </>
  );
};
export default MyApp;
