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
			{/* <Script>
				<script
					async
					defer
					src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxKfNXm9F65oqNP3Lk0-q98g-lQvLaD6c&libraries=places&callback=initMap"
				></script>
			</Script> */}
			<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
			<Toaster />
		</>
	);
}

export default MyApp;
