import React from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useRouter } from "next/router";
import { removeTokenCookie, setTokenCookie } from "./utils";

interface IAuthContext {
	user: firebase.User | null;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = React.createContext<IAuthContext>({
	user: null,
	logout: () => {},
	isAuthenticated: false,
});

function AuthProvider(props) {
	const [user] = useAuthState(auth);
	const router = useRouter();
	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				router.push("/");
			});
	};
	const value: IAuthContext = { user, logout, isAuthenticated: !!user };

	React.useEffect(() => {
		const unsubscribe = firebase.auth().onIdTokenChanged(async user => {
			if (user) {
				const token = await user.getIdToken();
				setTokenCookie(token);
			} else {
				removeTokenCookie();
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return <AuthContext.Provider {...props} value={value} />;
}

export { AuthProvider, AuthContext };
