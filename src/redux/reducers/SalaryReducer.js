import { SET_SALARY_LIST } from "../constants/SalaryConstants";

const stateDefault = {
    salaryList: [],
};

export const SalaryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_SALARY_LIST: {
            return { ...state, salaryList: action.salaryList.filter(row => row.school !== "na") };
        }
        default: return { ...state };
    };
};