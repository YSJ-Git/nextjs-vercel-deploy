import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import "../styles/style.css";

import Layout from "../components/_App/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
