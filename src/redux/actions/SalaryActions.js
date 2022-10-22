import Axios from "axios"
import { SET_SALARY_LIST } from "../constants/SalaryConstants";

export const getSalaryListAction = () => {
    return async (dispatch, getState) => {

        Axios({
            url: `https://data.gov.sg/api/action/datastore_search?resource_id=9326ca53-9153-4a9c-b93f-8ae032637b70&q=2019&limit=1000`,
            method: 'GET'
        })
            .then(function (response) {
                const salaryList = response.data.result.records
                dispatch({
                    type: SET_SALARY_LIST,
                    salaryList
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    };
}