import React from "react";
import Head from "next/head";

function Home() {
	return (
		<div className="container">
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>Next.js app + Tailwind + dark theme</main>
		</div>
	);
}

export default Home;
