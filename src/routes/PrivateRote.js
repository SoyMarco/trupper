import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRote = ({ children }) => {
	const location = useLocation();

	const user = useSelector((state) => state.login.user);

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace={true} />;
	}
	return children;
};
