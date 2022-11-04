import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/modules/home/components/HomePage";
import { KEY_APP_NAME } from "@/config/keys";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
