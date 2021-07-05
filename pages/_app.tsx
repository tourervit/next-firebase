import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { initAuth } from "../lib/firebase-auth";
import Script from "next/script";
import "../styles/globals.css";

initAuth();

const defaultTheme = "light";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>ICYY</title>
				<link rel="icon" href="favicon.ico" />
				<script
					async
					defer
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPH5AX5EO3dJYZVB5PKzRKxCA7TCVywC0&libraries=places"
				></script>
			</Head>

			<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
			<Toaster />
		</>
	);
}

export default MyApp;
