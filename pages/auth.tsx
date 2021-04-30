import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { FirebaseAuth } from "../components/FirebaseAuth";

const Auth = () => {
	const AuthUser = useAuthUser();
	return <FirebaseAuth />;
};

export const getServerSideProps = withAuthUserTokenSSR({
	whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Auth);
