import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux-slices/auth-slice";
const store = configureStore({
    reducer: authSlice.reducer
});

export default store;