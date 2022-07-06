import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
function About() {
  return<>
  <Head>
    <title>About Page</title>
    <meta name="description" content="Next Js App" />
  </Head>
  <h1 className="content">About</h1>;
  
  </> 
}

export default About;

About.getLayout = function PageLayout(page: React.ReactElement) {
  return <>
    {page}
    <Footer />
  </>;
};
