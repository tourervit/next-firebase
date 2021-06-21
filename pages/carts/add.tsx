import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { CartForm } from "../../components/CartForm";
import { Layout } from "../../components/Layout";

function Add() {
	const { email } = useAuthUser();
	return (
		<Layout email={email}>
			<CartForm />
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
})(Add);
