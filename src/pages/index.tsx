import Head from "next/head";

type Notice = {
	id: string;
	title: string;
	thumbnail: string;
	body: string;
	publishedAt: string;
	url: string;
	autor: string;
}

type HomeProps = {
	notices: Notice[];
}

export default function App(props: HomeProps) {
	return (
		<div>
			<Head>
				<title>Instituto de Computação | UFMT</title>
			</Head>

			<section></section>

			<section></section>
		</div>
	);
}
