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
				<title>ICYY</title>
				<link rel="icon" href="favicon.ico" />
				<script
					async
					defer
					src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}&libraries=places`}
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
