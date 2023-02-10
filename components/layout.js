/* components */
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <div className="bg-primary">
      <Head>
        <title>
          {props.title ? `${props.title} | Bro-Portfolio` : "Bro-Portfolio"}
        </title>
        <meta name="description" content="Bro Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
