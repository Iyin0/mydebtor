import { createSlice } from "@reduxjs/toolkit";

export const cookie = createSlice({
    name: 'cookiePopup',
    initialState: {
        show: false,
    },

    reducers: {
        cookiePopupState: (state, action) => {
            state.show = action
        },
    },
})

export const { cookiePopupState } = cookie.actions

export default cookie.reducer