import React from "react";
import { ThemeProvider } from "next-themes";
import { Header } from "../components/Header";
import "../styles/globals.css";

const defaultTheme = "light";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme={defaultTheme}>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
