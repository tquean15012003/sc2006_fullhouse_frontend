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
            alert("Invalid username or password")
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
            console.log(verificationInfo)
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
            console.log(resetInfo)
            await userService.resetPasswordService(resetInfo)
            alert("Reset password successfully!")
            const { navigate } = getState().NavigationReducer
            navigate("/signin", { replace: false })
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }
}

export const signOutAction = () => {
    return async (dispatch, getState) => {
        try {
            localStorage.removeItem(TOKEN);
            const { navigate } = getState().NavigationReducer
            navigate("/", { replace: false })
            window.location.reload();
        } catch (errors) {
            alert(errors.response.data.errors[0].message)
        }
    }

}