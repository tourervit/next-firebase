import React from "react";
import Head from "next/head";
import { useAuth, useLocale } from "../lib/hooks";
import { Spinner } from "../components/Spinner";
import { auth, googleAuthProvider } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignInButton } from "../components/SignInButton";
import { Layout } from "../components/layout";

function Home() {
	// const { user, userName } = useAuth();
	const { t } = useLocale();

	return <main>Home</main>;
}

export default Home;
