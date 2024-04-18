import React from "react";

export const TabLocation = ({ location }) => {
	return (
		<div>
			Altitud: {location?.alt}
			<br />
			Latitud: {location?.lat}
			<br />
			Longitud: {location?.lon}
		</div>
	);
};
