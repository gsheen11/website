import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Grant Sheen</title>
      </Head>
      <header className={utilStyles.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>Grant Sheen</h1>
      </header>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am a Software Engineer at&nbsp;
          <a href="https://headway.co" target="_blank" rel="noopener noreferrer">Headway</a>
          &nbsp;based in NYC 🗽
        </p>
      </section>
    </Layout>
  );
}