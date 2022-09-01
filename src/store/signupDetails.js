import { createSlice } from "@reduxjs/toolkit";

export const signupInfo = createSlice({
    name: 'School',
    initialState: {
        schoolName: '',
        schoolEmail: '',
        schoolState: '',
        schoolLga: '',
        schoolLevel: '',
        schoolPassword: '',
        schoolCac: null,
        schoolId: null
    },

    reducers: {
        addSchoolName: (state, action) => {
            state.schoolName = action
        },
        addSchoolEmail: (state, action) => {
            state.schoolEmail = action
        },
        addSchoolState: (state, action) => {
            state.schoolState = action
        },
        addSchoolLga: (state, action) => {
            state.schoolLga = action
        },
        addSchoolLevel: (state, action) => {
            state.schoolLevel = action
        },
        addSchoolPassword: (state, action) => {
            state.schoolPassword = action
        },
        addSchoolCac: (state, action) => {
            state.schoolCac = action
        },
        addSchoolId: (state, action) => {
            state.schoolId = action
        }
    },
})

export const { addSchoolName, addSchoolEmail, addSchoolState, addSchoolLga, addSchoolLevel, addSchoolPassword, addSchoolCac, addSchoolId } = signupInfo.actions

export default signupInfo.reducer