import React, { useEffect, useState } from "react";
import { CardData } from "../../components/CardData/CardData";
import { Col, Layout, Row, Space } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderHome } from "../../components/Header/HeaderHome";
import { SyncOutlined } from "@ant-design/icons";

const contentStyle = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#0958d9",
};

const footerStyle = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#4096ff",
};

const layoutStyle = {
	borderRadius: 8,
	overflow: "hidden",
};
export const Home = () => {
	const [quality, setQuality] = useState([]);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		setLoading(true);
		const data = await fetch("https://api.datos.gob.mx/v1/calidadAire");
		const dataJson = await data.json();
		setQuality(dataJson.results);
		setLoading(false);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Layout style={layoutStyle}>
				<HeaderHome />
				<Content style={contentStyle}>
					{loading && (
						<Space>
							<SyncOutlined spin />
						</Space>
					)}
					<Row gutter={16}>
						{quality?.map((item) => {
							return (
								<Col span={8} key={item._id}>
									{item?.stations && <CardData item={item} />}
								</Col>
							);
						})}
					</Row>
				</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</div>
	);
};
