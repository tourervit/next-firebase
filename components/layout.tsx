import Link from "next/link";
import { ReactNode } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useAuthUser } from "next-firebase-auth";

interface IProps {
	children: ReactNode;
	email: string | undefined;
}

function Layout({ children, email }: IProps) {
	const { signOut } = useAuthUser();

	return (
		<>
			<nav className="shadow-lg dark:bg-gray-800 mb-3" style={{ height: 64 }}>
				<div className="px-6 container mx-auto flex items-center justify-between h-16">
					<div>
						<Link href="/">
							<a className="py-3 uppercase text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-pink-600 hover:from-pink-600 hover:to-pink-300 tracking-wider">
								.ICYY
							</a>
						</Link>
					</div>

					<div className="md:flex items-center hidden">
						<div className="transform -translate-y-px">
							<ThemeSwitcher />
						</div>
						{email ? (
							<>
								<Link href="/carts/add">
									<a className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-red-200">
										Add Cart
									</a>
								</Link>
								<button
									className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-red-200"
									onClick={signOut}
								>
									Logout
								</button>
							</>
						) : (
							<Link href="/auth">
								<a className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-red-200">
									Login / Sign Up
								</a>
							</Link>
						)}
					</div>
				</div>
			</nav>
			<main
				className="container mx-auto my-0
			"
			>
				{children}
			</main>
		</>
	);
}

export { Layout };
