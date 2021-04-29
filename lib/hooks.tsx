import React from "react";
import { useRouter } from "next/router";
import en from "../public/i18n/en";
import ru from "../public/i18n/ru";
import { ILocale } from "../public/i18n/interface";
import { AuthContext } from "./context";

function useLocale() {
	const { locale } = useRouter();
	let t: ILocale;
	switch (locale) {
		case "ru":
			t = ru;
			break;
		default:
			t = en;
	}
	return { t };
}

function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
}

export { useLocale, useAuth };
