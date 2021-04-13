import React from "react";
import Head from "next/head";
import { useLocale } from "../lib/hooks";

function Home() {
	const { t } = useLocale();
	return (
		<div className="container">
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="text-3xl">{t.title}</h1>
			</main>
		</div>
	);
}

export default Home;
