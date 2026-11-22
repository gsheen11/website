import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grant Sheen</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <header className="header">
        <Image src="/images/logo.png" alt="Grant Sheen" width={50} height={50} priority />
      </header>
    </>
  );
}
