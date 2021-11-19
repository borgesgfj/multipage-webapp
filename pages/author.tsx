import Head from "next/head";
import AuthorCv from "../src/components/AuthorCv";
import Nav from "../src/components/Navbar";

export default function Author() {
  return (
    <>
      <Head>
        <title>Resume | Gilberto Borges</title>
      </Head>
      <main>
        <Nav></Nav>
        <AuthorCv></AuthorCv>
      </main>
    </>
  );
}
