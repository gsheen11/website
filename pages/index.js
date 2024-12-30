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
        <p>Website under construction!</p>
      </header>
    </Layout>
  );
}