import { useTheme } from "next-themes";
import React from "react";
import ReactMapGL from "react-map-gl";

function Map() {
	const { theme } = useTheme();
	const [viewport, setViewport] = React.useState({
		latitude: 13.7563,
		longitude: 100.5018,
		zoom: 10,
	});

	const mapStyle =
		theme === "dark"
			? "mapbox://styles/coder4real/cko5lsm2y1oe118tes6idd8wq"
			: "mapbox://styles/coder4real/cko5lhh7r1o3c18tezswptths";

	return (
		<ReactMapGL
			{...viewport}
			width="100%"
			height="100%"
			minZoom={5}
			maxZoom={15}
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
			onViewStateChange={nextView => setViewport(nextView)}
			mapStyle={mapStyle}
		/>
	);
}

export { Map };
