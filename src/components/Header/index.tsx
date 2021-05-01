import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {

	return (
		<div className={styles.headerContainer}>
			<Image src="/ic_instituto_computacao.png" width={208} height={64} />

			<div className={styles.menuContainer}>
				<strong>O Instituto</strong>
				<strong>Pesquisa</strong>
				<strong>Centro Acadêmico</strong>
				<strong>Atlética Trojan</strong>

				<input />
			</div>

		</div>
	);
}