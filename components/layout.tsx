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
			<nav className="shadow-lg dark:bg-gray-800" style={{ height: 64 }}>
				<div className="px-6 container mx-auto flex items-center justify-between h-16">
					<div>
						<Link href="/">
							<a className="py-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600 tracking-wider">
									Find My Ice
								</span>
							</a>
						</Link>
					</div>

					<div className="md:flex items-center hidden animate-appearing">
						{email ? (
							<>
								<Link href="/add">
									<a className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200">
										Add Cart
									</a>
								</Link>
								<button
									className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200"
									onClick={signOut}
								>
									Logout
								</button>
							</>
						) : (
							<Link href="/auth">
								<a className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200">
									Login / Sign Up
								</a>
							</Link>
						)}
						<div className="transform -translate-y-px">
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			</nav>
			<main className="container mx-auto my-0 max-w-4xl">{children}</main>
		</>
	);
}

export { Layout };
