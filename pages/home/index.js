import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Instituto de Computação</title>
                <link rel="icon" href="/logo_ic.png" />
            </Head>

            <header className={styles.header}>
                <img
                    src="/logo_ic.png"
                    alt="IC Logo"
                    className={styles.logo}
                ></img>
                <p className={styles.headerTitle}>Em construção</p>
            </header>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Noboru, Profeta, AdrianoII, Chico, Rolinha, Isa e
                    Matherson
                </a>
            </footer>
        </div>
    );
}
