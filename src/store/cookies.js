import { createSlice } from "@reduxjs/toolkit";

export const cookie = createSlice({
    name: 'cookiePopup',
    initialState: {
        show: false,
        picked: false,
    },

    reducers: {
        cookiePopupState: (state, action) => {
            state.show = action
        },

        cookiePicked: (state, action) => {
            state.picked = action
        }
    },
})

export const { cookiePopupState, cookiePicked } = cookie.actions

export default cookie.reducer