import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Car</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
