import '../styles/global.scss';

import { Header } from '../components/Header';

import styles from '../styles/app.module.scss';

export default function App({ Component, pageProps }) {
	return (
		<div className={styles.wrapper}>
			<main>
				<Header />
				<Component {...pageProps} />
			</main>
		</div>
	);
}
