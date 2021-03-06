import React from "react";
import { Layout } from "../components/Layout";
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { Map } from "../components/Map";

function Home() {
	const AuthUser = useAuthUser();

	return (
		<Layout email={AuthUser.email}>
			<div className="flex">
				<div className="w-1/2">Carts</div>
				<div className="w-1/2" style={{ height: "calc(100vh - 64px - 14px)" }}>
					<Map />
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({
	whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async () => {
	return {
		props: {},
	};
});

export default withAuthUser({
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home);
