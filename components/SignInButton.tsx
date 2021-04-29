import React from "react";
import { auth, googleAuthProvider } from "../lib/firebase";

function SignInButton() {
	const signInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider);
	};
	return (
		<button
			className="flex items-center px-3 py-2 bg-blue-400 hover:bg-blue-500 uppercase
			text-blue-100 rounded-lg"
			onClick={signInWithGoogle}
		>
			<img
				src="http://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png"
				alt="Google"
				className="w-4 h-4 mr-2"
			/>
			Sign in with Google
		</button>
	);
}

export { SignInButton };
