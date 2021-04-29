import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../lib/context";
import "../styles/globals.css";
import { Layout } from "../components/layout";

const defaultTheme = "light";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Find My Ice</title>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
				<AuthProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</ThemeProvider>
			<Toaster />
		</>
	);
}

export default MyApp;
