import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>Becoming Buddhist</title>
        </Head>
        <h1>First Post</h1>
        <p>Coming soon!</p>
    </Layout>
  );
}