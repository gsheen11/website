import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function Inspiration() {
  return (
    <Layout >
      <Head>
        <title>Inspiration</title>
      </Head>
      <div className={utilStyles.container}>
        <h1>Inspiration</h1>
      </div>
    </Layout>
  );
}