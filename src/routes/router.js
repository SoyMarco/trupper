import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home/Home";
import { Login } from "../features/login/Login";
import { PrivateRote } from "./PrivateRote";

export const router = createBrowserRouter([
	{
		path: "/home",
		element: (
			<PrivateRote>
				<Home />,
			</PrivateRote>
		),
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <Login />,
	},
]);
