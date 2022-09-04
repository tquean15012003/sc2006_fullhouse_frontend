import { SET_NAVIGATION } from "../constants/NavigationConstants";

export const setNavigationAction = (navigate) => ({
    type: SET_NAVIGATION,
    navigate
})