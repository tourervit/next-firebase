import React from "react";

interface SwitchProps {
	checked: boolean;
	onChange: Function;
}

function Switch({ checked, onChange: changeTheme }: SwitchProps) {
	return (
		<label
			htmlFor="switch"
			className={`${
				checked ? "bg-indigo-800" : "bg-yellow-400"
			} animate-appearing rounded-full w-10 h-6 flex items-center px-1 shadow-inner cursor-pointer`}
		>
			<input
				id="switch"
				type="checkbox"
				checked={checked}
				className={`${
					checked ? "translate-x-0" : "translate-x-full"
				} box-content relative transform duration-300 ease-in-out appearance-none w-4 h-4 rounded-full bg-white shadow-md outline-none focus:bg-gray-200 cursor-pointer`}
				onChange={() => changeTheme()}
			/>
		</label>
	);
}

export { Switch };
