import { SET_RETIREMENT_AGE, SET_RETIREMENT_INFO } from "../constants/RetirementInfoConstants";

const stateDefault = {
    retirementInfo: {
        name: "",
        age: "20",
        ageOfGrad: "22",
        noChild: "0",
        currentSaving: "0",
        degree: "",
        salary: "0",
        carCat: "A",
        housePrice: "0",
        investments: "0"
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