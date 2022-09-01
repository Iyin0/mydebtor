import { configureStore } from '@reduxjs/toolkit'
import landingDropdown from './landingDropdown'
import signupDetails from './signupDetails'

export default configureStore({
    reducer: {
        landingPageDropdown: landingDropdown,
        signupInfo: signupDetails,
    }
})