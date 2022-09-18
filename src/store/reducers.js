import { configureStore } from '@reduxjs/toolkit'
import landingDropdown from './landingDropdown'
import signupDetails from './signupDetails'
import cookies from './cookies'
import login from './loginState'

export default configureStore({
    reducer: {
        landingPageDropdown: landingDropdown,
        signupInfo: signupDetails,
        cookie: cookies,
        loginState: login
    }
})