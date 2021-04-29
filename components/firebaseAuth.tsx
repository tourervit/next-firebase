import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";

const uiConfig = {
	signInFlow: "popup",
	signInSuccessUrl: "/",
	signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function FirebaseAuth() {
	return (
		<div className="mt-10">
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</div>
	);
}
export { FirebaseAuth };
