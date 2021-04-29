import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./Switch";

function ThemeSwitcher() {
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

	return isMounted ? <Switch checked={isDark} onChange={switchTheme} /> : <div></div>;
}

export { ThemeSwitcher };
