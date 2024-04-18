import { Card, Tabs } from "antd";
import React from "react";
import { TabLocation } from "../Tabs/TabLocation";
import { TabMeasurement } from "../Tabs/TabMeasurement";

export const CardData = ({ item }) => {
	const station = item?.stations[0];

	const onChange = (key) => {
		// console.log(key);
	};
	const items = [
		{
			key: "1",
			label: "Ubicación",
			children: <TabLocation location={station.location} />,
		},
		{
			key: "2",
			label: "Mediciones",
			children: <TabMeasurement measurement={station.measurements[0]} />,
		},
	];
	return (
		<Card title={station.name} bordered={false} style={{ margin: "5px" }}>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</Card>
	);
};
