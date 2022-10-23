import { retirementInfoService } from "../../services/RetirementInfoService"
import { SET_RETIREMENT_AGE, SET_RETIREMENT_INFO } from "../constants/RetirementInfoConstants"

export const getRetirementInfoAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.getRetirementInfoService()
            const retirementInfo = response.data.retirementInfo

            if (retirementInfo.name === "") {
                const { navigate } = getState().NavigationReducer
                navigate("/submitprofile", { replace: false })
            } else {
                dispatch({
                    type: SET_RETIREMENT_INFO,
                    retirementInfo
                })
            }

        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const getRetirementAgeAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.getRetirementAgeService()
            dispatch({
                type: SET_RETIREMENT_AGE,
                retirementAge: response.data.retirementAge
            })
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const updateRetirementInfoAction = (retirementInfo) => {
    return async (dispatch, getState) => {
        try {
            await retirementInfoService.updateRetirementInfoService(retirementInfo)
            alert("Your information has been recorded! ")
            const { navigate } = getState().NavigationReducer
            navigate("/profile", { replace: false })
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}