import React, { useState } from "react";
import { USER, PASSWORD } from "../../Utils/types";
import { useDispatch, useSelector } from "react-redux";
import { setUserRedux } from "./loginSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	const userLogged = useSelector((state) => state.login.user);

	if (userLogged) {
		return <Navigate to="/home" state={{ from: location }} replace={true} />;
	}
	const handleLogin = () => {
		if (user === USER && password === PASSWORD) {
			dispatch(setUserRedux(user));
			navigate("/home");
		} else {
			console.log("Login incorrecto");
			alert("Usuario o contraseña incorrectos");
		}
	};

	return (
		<div>
			Login
			<div>
				<span>Usuario:</span>
				<input
					type="text"
					value={user}
					onChange={(event) => setUser(event.target.value)}
				/>
			</div>
			<div>
				<span>Contraseña:</span>
				<input
					type="text"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			<button onClick={() => handleLogin()}>Iniciar sesión</button>
		</div>
	);
};
