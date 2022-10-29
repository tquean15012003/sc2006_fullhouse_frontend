import { userService } from "../../services/UserService";
import { TOKEN, EMAIL } from "../../utils/settings.js";

export const signInAction = (loginInfo) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await userService.signInService(loginInfo)
            localStorage.removeItem(TOKEN)
            localStorage.setItem(TOKEN, data.token)
            const { navigate } = getState().NavigationReducer
            navigate("/profile", { replace: false })
        } catch (errors) {
            alert(errors.response.data.message)
        }
    };
}

export const signUpAction = (user) => {
    return async (dispatch, getState) => {
        try {
            await userService.signUpService(user)
            localStorage.removeItem(EMAIL)
            localStorage.setItem(EMAIL, user.email)
            alert("Register successfully. Please proceed to confirm your email.")
            const { navigate } = getState().NavigationReducer;
            navigate("/confirmsignup", { replace: false })
        } catch (errors) {
            alert("Username, email or phone number has been taken!")
        }
    }
}

export const verifyAction = (OTP) => {
    return async (dispatch, getState) => {
        try {
            const verificationInfo = {
                verificationCode: OTP.OTP,
                email: localStorage.getItem(EMAIL)
            }
            await userService.verifyService(verificationInfo)
            localStorage.removeItem(EMAIL)
            alert("Verify successfully!")
            const { navigate } = getState().NavigationReducer
            navigate("/signin", { replace: false })
        } catch (errors) {
            alert("Invalid OTP!")
        }
    }
}

export const sendVerificationCodeAction = (email, setSent) => {
    return async (dispatch, getState) => {
        try {
            await userService.sendVerificationCodeService(email)
            setSent(true)
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const resetPasswordAction = (resetInfo) => {
    return async (dispatch, getState) => {
        try {
            await userService.resetPasswordService(resetInfo)
            alert("Reset password successfully!")
            const { navigate } = getState().NavigationReducer
            navigate("/signin", { replace: false })
        } catch (errors) {
            alert("Wrong OTP!!")
        }
    }
}

export const signOutAction = () => {
    return async (dispatch, getState) => {
        try {
            localStorage.removeItem(TOKEN);
            var mydate = new Date();
            mydate.setTime(mydate.getTime() - 1);
            document.cookie = "username=; expires=" + mydate.toGMTString();             
            const { navigate } = getState().NavigationReducer
            navigate("/", { replace: false })
            window.location.reload();
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const changePasswordAction = (changePasswordInfo) => {
    return async (dispatch, getState) => {
        try {
            await userService.changePasswordService(changePasswordInfo)
            alert("Change password successfully! Please sign in again!")
            dispatch(signOutAction())
        } catch (errors) {
            alert("Old password is not valid")
        }
    }
}

export const ChangeEmailAction = (newEmail) => {
    return async (dispatch, getState) => {
        try {
            await userService.changeEmailService(newEmail)
            alert("Change email successfully! Please proceed to verify your email!")
            localStorage.removeItem(EMAIL)
            localStorage.setItem(EMAIL, newEmail.newEmail)
            await userService.sendVerificationCodeService({ email: newEmail.newEmail })
            const { navigate } = getState().NavigationReducer
            navigate("/verifyemail", { replace: false })
        } catch (errors) {
            alert("Email has been taken!")
        }
    }
}

export const verifyEmailAction = (OTP) => {
    return async (dispatch, getState) => {
        try {
            const verificationInfo = {
                verificationCode: OTP.verificationCode,
                email: localStorage.getItem(EMAIL)
            }
            await userService.verifyService(verificationInfo)
            alert("Verify email successfully! Please login again!")
            dispatch(signOutAction())
        } catch (errors) {
            alert("Wrong OTP!")
        }
    }
}

export const retrieveUsernameAction = (userInfo) => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.retrieveUsernameService(userInfo)
            localStorage.removeItem(EMAIL)
            localStorage.setItem(EMAIL, userInfo.newEmail)
            alert(response.data.message)
            const { navigate } = getState().NavigationReducer;
            navigate("/confirmsignup", { replace: false })
        } catch (errors) {
            console.log(errors.response.data.message)
            alert(errors.response.data.message)
        }
    }
}

export const googleSignInAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await userService.googleSignInService()
            localStorage.removeItem(TOKEN)
            localStorage.setItem(TOKEN, response.data.token)
            const { navigate } = getState().NavigationReducer
            navigate("/profile", { replace: false })
        } catch (errors) {
            console.log(errors)
        }
    };
}