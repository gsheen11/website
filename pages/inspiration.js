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
        {/* <h1>Inspiration</h1> */}
        <div className={utilStyles.grid}>
          <div>
            <Image
              src="/images/onion.png"
              alt="Onion"
              height={500}
              width={400}
            />
          </div>
          <div className={utilStyles.videoContainer}>
            <h4>Ram Dass bargaining story (ends at 35:45)</h4>      
            <iframe 
              width="450" 
              height="350" 
              src="https://www.youtube.com/embed/IEHx5B0fuPc?si=rYxZSCBrW8dKEhZz&amp;start=1950" 
              title="Bargaining story" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
          <div className={utilStyles.metamorphoses}>
            <Image
              src="/images/metamorphoses 1.png"
              alt="Metamorphoses 1"
              height={400}
              width={200}
            />
            <Image
              src="/images/metamorphoses 2.png"
              alt="Metamorphoses 2"
              height={400}
              width={250}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}