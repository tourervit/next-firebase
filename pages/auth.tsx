import { GetServerSideProps, NextApiRequest } from "next";
import { useRouter } from "next/router";
import { FirebaseAuth } from "../components/firebaseAuth";
import { useAuth } from "../lib/hooks";
import { getUID } from "../lib/firebaseAdmin";

export default function Auth({ kek }) {
	const { isAuthenticated } = useAuth();
	const router = useRouter();

	return <FirebaseAuth />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const uid = await getUID(req as NextApiRequest);

	if (uid) {
		res.writeHead(302, {
			Location: "/",
		});
		res.end();
	}
	return {
		props: {},
	};
};
