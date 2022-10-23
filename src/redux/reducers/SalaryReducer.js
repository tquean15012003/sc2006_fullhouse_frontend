import { SET_SALARY_LIST } from "../constants/SalaryConstants";

const stateDefault = {
    salaryList: [],
};

export const SalaryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_SALARY_LIST: {
            let newSalaryList = action.salaryList.filter(row => row.school !== "na")
            newSalaryList.push({
                school: "Other",
                _full_count: "280",
                degree: "Other",
                university: "Other",
                gross_monthly_median: "3000",
                gross_mthly_25_percentile: "3000",
                rank: 0.04,
                basic_monthly_median: "3000",
                employment_rate_ft_perm: "50",
                gross_mthly_75_percentile: "3000",
                gross_monthly_mean: "3000",
                basic_monthly_mean: "3000",
                year: "2019",
                _id: 10000,
                employment_rate_overall: "50"
            })
            console.log(newSalaryList)
            return { ...state, salaryList: newSalaryList };
        }
        default: return { ...state };
    };
};