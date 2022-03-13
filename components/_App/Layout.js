import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Cube Entertainment</title>
        <meta name="description" content="Cube Entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
