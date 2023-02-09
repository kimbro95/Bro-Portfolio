import Head from "next/head";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Bro-Portfolio</title>
        <meta name="description" content="Bro Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Bro Portfolio</h1>
    </Layout>
  );
}
