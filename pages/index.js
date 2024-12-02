import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
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
        <h1 className={utilStyles.headingXl}>Grant Sheen</h1>
        <p>Website under construction!</p>
      </header>
    </Layout>
  );
}