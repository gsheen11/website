import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="images/yin yang.png"/>
        <meta name="description" content="My personal website" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.navHome}>
          <Link href="/" className={styles.navItem}>
          <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
          />
          </Link>
        </div>
        <div className={styles.navItems}>
          <Link href="/writing" className={styles.navItem}>
            Writing
          </Link>
          <Link href="/inspiration" className={styles.navItem}>
            Inspiration
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}