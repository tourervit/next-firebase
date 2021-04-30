import React from "react";
import { Layout } from "../components/Layout";
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";

function Home() {
	const AuthUser = useAuthUser();

	return <Layout email={AuthUser.email}>Home page</Layout>;
}

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
	const token = await AuthUser.getIdToken();
	return {
		props: {
			favoriteColor: "black",
		},
	};
});

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
