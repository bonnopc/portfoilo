import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/modules/home/components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prosenjit Chowdhury (@bonnopc) | Software Engineer</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
