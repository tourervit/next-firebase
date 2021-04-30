import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseAuthConfig = {
	signInFlow: "popup",
	signInOptions: [
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			requireDisplayName: false,
		},
	],
	signInSuccessUrl: "/",
	credentialHelper: "none",
	callbacks: {
		// https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
		signInSuccessWithAuthResult: () => false,
	},
};

export const FirebaseAuth = () => {
	const [renderAuth, setRenderAuth] = React.useState(false);
	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setRenderAuth(true);
		}
	}, []);
	return (
		<div>
			{renderAuth ? (
				<div className="mt-10">
					<StyledFirebaseAuth
						uiConfig={firebaseAuthConfig}
						firebaseAuth={firebase.auth()}
					/>
				</div>
			) : null}
		</div>
	);
};
