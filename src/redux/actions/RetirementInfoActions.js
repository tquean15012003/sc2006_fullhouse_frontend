import { retirementInfoService } from "../../services/RetirementInfoService"
import { SET_RETIREMENT_AGE, SET_RETIREMENT_INFO } from "../constants/RetirementInfoConstants"

const setRetirementInfoAction = (retirementInfo) => ({
    type: SET_RETIREMENT_INFO,
    retirementInfo
})

export const getRetirementInfoAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.getRetirementInfoService()
            const retirementInfo = response.data.retirementInfo

            if (retirementInfo.name === "") {   
                const { navigate } = getState().NavigationReducer
                navigate("/submitprofile", { replace: false })
            } else {
                dispatch(setRetirementInfoAction(retirementInfo))
            }

        } catch (errors) {
            const { navigate } = getState().NavigationReducer
            navigate("/", { replace: false })
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


export const updateInvestmentAction = (investments, setShowModal) => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.updateInvestmentService({investments: investments})
            const retirementInfo = response.data.retirementInfo
            alert("Your information has been recorded! ")
            dispatch(setRetirementInfoAction(retirementInfo))
            dispatch(getRetirementAgeAction())
            setShowModal(false)
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const updateSalaryAction = (salary, setShowModal) => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.updateSalaryService({salary: salary})
            const retirementInfo = response.data.retirementInfo
            alert("Your information has been recorded! ")
            dispatch(setRetirementInfoAction(retirementInfo))
            dispatch(getRetirementAgeAction())
            setShowModal(false)
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const updateHousePriceAction = (housePrice, setShowModal) => {
    return async (dispatch, getState) => {
        try {
            const response = await retirementInfoService.updateHousePriceService({housePrice: housePrice})
            const retirementInfo = response.data.retirementInfo
            alert("Your information has been recorded! ")
            dispatch(setRetirementInfoAction(retirementInfo))
            dispatch(getRetirementAgeAction())
            setShowModal(false)
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}