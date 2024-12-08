import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Inspiration() {
  const images = [
    { src: '/images/onion.png', alt: 'Onion' },
    { src: '/images/metamorphoses 1.png', alt: 'Metamorphoses' }
  ]
  
  return (
    <Layout >
      <Head>
        <title>Inspiration</title>
      </Head>
      <div className={utilStyles.container}>
        <h1>Inspiration</h1>
        <div className={utilStyles.grid}>
          <div>
            <Image
              src="/images/onion.png"
              alt="Onion"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/images/metamorphoses 1.png"
              alt="Metamorphoses"
              width={100}
              height={100}
              layout="responsive"
            />
            <Image
              src="/images/metamorphoses 2.png"
              alt="Metamorphoses"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}