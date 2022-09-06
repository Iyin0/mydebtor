import { createSlice } from "@reduxjs/toolkit";

export const dropDownState = createSlice({
    name: 'landingPageDropdown',
    initialState: {
        show: false,
        sideNav: false,
    },

    reducers: {
        toggleLandingDropdown: (state, action) => {
            state.show = action
        },
        toggleSideNav: (state, action) => {
            state.sideNav = action
        }
    },
})

export const { toggleLandingDropdown, toggleSideNav } = dropDownState.actions

export default dropDownState.reducer