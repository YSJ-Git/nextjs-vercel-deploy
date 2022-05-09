import { SessionProvider } from "next-auth/react";
import UserStore from "../store/users";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "reactjs-popup/dist/index.css";
import "../styles/style.css";

import Layout from "../components/_App/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <UserStore>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </SessionProvider>
    </UserStore>
  );
}

export default MyApp;
