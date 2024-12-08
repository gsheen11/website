import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function Writing() {
  return (
    <Layout>
      <Head>
        <title>Writing</title>
      </Head>
      <div className={utilStyles.container}>
        <h1>Writing</h1>
        <h3>Coming Soon...</h3>
      </div>
    </Layout>
  );
}