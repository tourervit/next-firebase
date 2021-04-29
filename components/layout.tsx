import { ReactNode } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { useAuth } from "../lib/hooks";

interface IProps {
	children: ReactNode;
}

function Layout({ children }: IProps) {
	const { isAuthenticated } = useAuth();

	return (
		<>
			<nav className="shadow-lg dark:bg-gray-800" style={{ height: 64 }}>
				<div className="px-6 container mx-auto flex items-center justify-between h-16">
					<div>
						<Link href="/">
							<a className="py-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200">
								<span className="tracking-wider">Find My Ice</span>
							</a>
						</Link>
					</div>

					<div className="md:flex items-center hidden animate-appearing">
						{isAuthenticated ? (
							<>
								<Link href="/add">
									<a className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200">
										Add Cart
									</a>
								</Link>
								<button
									className="p-3 text-sm uppercase font-bold text-pink-950 dark:text-pink-200"
									onClick={() => {}}
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
