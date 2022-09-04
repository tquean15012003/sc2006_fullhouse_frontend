import { SET_NAVIGATION } from "../constants/NavigationConstants";

const stateDefault = {
    navigate: "",
};

export const NavigationReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_NAVIGATION: {
            return { ...state, navigate: action.navigate };
        }
        default: return { ...state };
    };
};