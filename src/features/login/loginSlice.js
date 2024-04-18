import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "login",
	initialState: {
		user: undefined,
	},
	reducers: {
		setUserRedux: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUserRedux } = loginSlice.actions;

export default loginSlice.reducer;
