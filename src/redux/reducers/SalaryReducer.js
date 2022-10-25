import { demoSalaryObject } from "../../utils/DemoObject";
import { SET_SALARY_LIST } from "../constants/SalaryConstants";

const stateDefault = {
    salaryList: [],
};

export const SalaryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_SALARY_LIST: {
            let newSalaryList = action.salaryList.filter(row => row.school !== "na")
            newSalaryList.push(demoSalaryObject)
            return { ...state, salaryList: newSalaryList };
        }
        default: return { ...state };
    };
};