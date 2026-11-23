import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grant Sheen</title>
      </Head>
      <header className="top-bar">
        <a href="/files">Sign in</a>
      </header>
    </>
  );
}
