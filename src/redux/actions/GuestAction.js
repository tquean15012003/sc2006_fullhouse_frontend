import { retirementInfoService } from "../../services/RetirementInfoService"
import { SET_GUEST_RETIREMENT_AGE } from "../constants/GuestConstants"

export const getGuestRetirementAgeAction = (retirementInfo, setShow) => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.getGuestRetirementAge(retirementInfo)
            dispatch({
                type: SET_GUEST_RETIREMENT_AGE,
                retirementAge: response.data.retirementAge
            })
            setShow(true)
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}