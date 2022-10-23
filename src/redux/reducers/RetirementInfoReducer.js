import { SET_RETIREMENT_AGE, SET_RETIREMENT_INFO } from "../constants/RetirementInfoConstants";

const stateDefault = {
    retirementInfo: {
        name: "",
        age: "",
        ageOfGrad: "",
        noChild: "",
        currentSaving: "",
        degree: "",
        salary: "",
        carCat: "",
        housePrice: "",
        investments: ""
    },
    retirementAge: 0
};

export const RetirementInfoReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_RETIREMENT_INFO: {
            return { ...state, retirementInfo: action.retirementInfo };
        }
        case SET_RETIREMENT_AGE: {
            return {...state, retirementAge: action.retirementAge}
        }
        default: return { ...state };
    };
};