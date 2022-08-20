import { configureStore } from '@reduxjs/toolkit'
import landingDropdown from './landingDropdown'

export default configureStore({
    reducer: {
        landingPageDropdown: landingDropdown,
    }
})