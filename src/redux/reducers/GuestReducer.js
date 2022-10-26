import { SET_GUEST_RETIREMENT_AGE } from "../constants/GuestConstants";

const stateDefault = {
    retirementAge: 0
};

export const GuestRetirementInfoReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_GUEST_RETIREMENT_AGE: {
            return {...state, retirementAge: action.retirementAge}
        }
        default: return { ...state };
    };
};