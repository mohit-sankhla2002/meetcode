import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        user: null, 
        token: null, 
        isAuthenticated: false
    }, 
    reducers: {
        login(state,action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        logout(state,action) {
            state.user = null;
            state.isAuthenticated = false;
            state.token = null;
        }
    }
});

export default authSlice;
export const {login, logout} = authSlice.reducer;