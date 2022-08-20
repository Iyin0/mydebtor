import { createSlice } from "@reduxjs/toolkit";

export const dropDownState = createSlice({
    name: 'landingPageDropdown',
    initialState: {
        show: false,
    },

    reducers: {
        toggleLandingDropdown: (state, action) => {
            state.show = action
        },
    },
})

export const { toggleLandingDropdown } = dropDownState.actions

export default dropDownState.reducer