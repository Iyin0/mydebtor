import { createSlice } from "@reduxjs/toolkit";

export const authenticate = createSlice({
    name: 'loginState',
    initialState: {
        authenticated: false
    },

    reducers: {
        userLogin: (state) => {
            state.authenticated = true
        },

        userLogout: (state) => {
            state.authenticated = false
        }
    },
})

export const { userLogin, userLogout } = authenticate.actions

export default authenticate.reducer