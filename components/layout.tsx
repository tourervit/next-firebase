import { ReactNode } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface IProps {
	children: ReactNode;
}

function Layout({ children }: IProps) {
	return (
		<>
			<nav className="bg-pink-200 dark:bg-gray-800" style={{ height: 64 }}>
				<div className="px-6 container mx-auto flex items-center justify-between h-16">
					<Link href="/">
						<a>
							<span className="text-2xl">🍧</span>
						</a>
					</Link>
					<ThemeSwitcher />
				</div>
			</nav>
			<main className="container mx-auto my-0 max-w-4xl">{children}</main>
		</>
	);
}

export { Layout };
