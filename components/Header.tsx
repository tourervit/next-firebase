import React from "react";
import { useTheme } from "next-themes";
import { useLocale } from "../lib/hooks";
import { Switch } from "./Switch";

function Header() {
	const { t } = useLocale();
	const [isMounted, setIsMounted] = React.useState(false);
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";
	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	};

	return (
		<header className="p-2 flex justify-between">
			{t.header}
			{isMounted ? <Switch checked={isDark} onChange={switchTheme} /> : <div></div>}
		</header>
	);
}

export { Header };
