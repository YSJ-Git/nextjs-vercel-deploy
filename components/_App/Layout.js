import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cube Entertainment</title>
        <meta name="description" content="Cube Entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
