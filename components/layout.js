import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My personal website" />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.navHome}>
          <Link href="/" className={styles.navItem}>
            GS
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