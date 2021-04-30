import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { initAuth } from "../lib/firebase-auth";
import "../styles/globals.css";

initAuth();

const defaultTheme = "light";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Find My Ice</title>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
			<Toaster />
		</>
	);
}

export default MyApp;
