import { Header } from "antd/es/layout/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserRedux } from "../../features/login/loginSlice";
import { Button } from "antd";
const headerStyle = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#4096ff",
};

export const HeaderHome = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userLogged = useSelector((state) => state.login.user);

	const handleLogout = () => {
		dispatch(setUserRedux(undefined));
		navigate("/login");
	};
	return (
		<Header style={headerStyle}>
			{userLogged}

			<Button
				// type="primary"
				style={{ margin: "5px" }}
				onClick={() => handleLogout()}
			>
				cerrar sesión
			</Button>
		</Header>
	);
};
