import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, username } = action.payload;
      state.token = accessToken;
      state.username = username;
    },
    logout: (state) => {
      state.username = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.username;
export default authSlice.reducer;
