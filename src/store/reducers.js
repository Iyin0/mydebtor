import { configureStore } from '@reduxjs/toolkit'
import landingDropdown from './landingDropdown'
import signupDetails from './signupDetails'
import cookies from './cookies'

export default configureStore({
    reducer: {
        landingPageDropdown: landingDropdown,
        signupInfo: signupDetails,
        cookie: cookies,
    }
})