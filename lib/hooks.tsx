import { useRouter } from "next/router";
import en from "../public/i18n/en";
import ru from "../public/i18n/ru";
import { ILocale } from "../public/i18n/interface";

export function useLocale() {
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
