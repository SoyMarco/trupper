import React from "react";

export const TabMeasurement = ({ measurement }) => {
	return (
		<div>
			<div>
				Unidad: {measurement?.unit}
				<br />
				Valor: {measurement?.value}
				<br />
				Hora: {measurement?.time}
				<br />
				Contaminante: {measurement?.pollutant}
			</div>
		</div>
	);
};
