import { ChangeEvent } from "react";
import {
	Combobox,
	ComboboxInput,
	ComboboxList,
	ComboboxOption,
	ComboboxPopover,
} from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { SelectFunction } from "./CartForm";
import "@reach/combobox/styles.css";

interface IPlaceSearchBoxProps {
	onSelectAddress: SelectFunction;
	defaultValue: string;
}
interface ISuggestion {
	description: string;
	place_id: string;
}

function PlaceSearchBox({ onSelectAddress, defaultValue }: IPlaceSearchBoxProps) {
	const {
		ready,
		value,
		setValue,
		suggestions: { data, loading, status },
		clearSuggestions,
	} = usePlacesAutocomplete({ debounce: 300 });

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		if (!e.target.value) {
			onSelectAddress("", null, null);
		}
	};

	const handleSelect = async address => {
		setValue(address);
		try {
			const results = await getGeocode({ address });
			const { lat, lng } = await getLatLng(results[0]);
			onSelectAddress(address, lat, lng);
		} catch (error) {
			console.error("Error: ", error);
		}
	};

	return (
		<Combobox onSelect={handleSelect}>
			<ComboboxInput
				value={value}
				onChange={handleChange}
				disabled={!ready}
				autoComplete="off"
				placeholder="47 Parkes Street, Yau Ma Tei, Hong Kong"
				className="w-full px-4 py-2 rounded-sm"
			/>
			<ComboboxPopover>
				<ComboboxList>
					{status === "OK" &&
						data.map((suggestion: ISuggestion) => (
							<ComboboxOption
								key={suggestion.place_id}
								value={suggestion.description}
								className="dark:bg-gray-700 dark:hover:text-black"
							/>
						))}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
	);
}

export { PlaceSearchBox };
