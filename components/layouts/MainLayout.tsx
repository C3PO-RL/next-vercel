import { FC } from 'react';
import styles from './MainLayout.module.css';
import Head from 'next/head';
import Navbar from '../Navbar';

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
