import { init } from "next-firebase-auth";

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

export const initAuth = () => {
	init({
		authPageURL: "/auth",
		appPageURL: "/",
		loginAPIEndpoint: "/api/login",
		logoutAPIEndpoint: "/api/logout",
		firebaseAdminInitConfig: {
			credential: {
				projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
				privateKey: process.env.FIREBASE_PRIVATE_KEY
					? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
					: undefined,
			},
			databaseURL: "",
		},
		firebaseClientInitConfig: {
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			databaseURL: "",
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		},
		cookies: {
			name: "nf",
			keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],
			httpOnly: true,
			maxAge: TWELVE_DAYS_IN_MS,
			overwrite: true,
			path: "/",
			sameSite: "strict",
			secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === "true",
			signed: true,
		},
	});
};
