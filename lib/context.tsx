import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const AuthContext = React.createContext(null);

function AuthProvider(props) {
	const [user] = useAuthState(auth);
	const value = { user, userName: null };
	return <AuthContext.Provider {...props} value={value} />;
}

export { AuthProvider, AuthContext };
