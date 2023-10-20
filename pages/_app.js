import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>श्री ଭବାନୀ</title>
        <meta
          property="og:URL"
          content="https://shreebhavani.in/_next/image?url=%2Flogo2.png&w=96&q=1"
        />

        <meta property="og:type" content="Electronic Store" key="type" />

        <meta property="og:title" content="श्री ଭବାନୀ" key="title" />

        <meta
          property="og:description"
          content="Electronics, Furniture & Mobiles"
          key="description"
        />

        <meta
          property="og:image"
          content="https://shreebhavani.in/_next/image?url=%2Flogo2.png&w=96&q=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
