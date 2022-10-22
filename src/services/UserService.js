import { baseService } from "./BaseService";

export class UserService extends baseService {
    signInService = (loginInfo) => {
        return this.post('users/signin', loginInfo);
    }

    signUpService = (user) => {
        return this.post('users/signup', user)
    }

    verifyService = (verificationInfo) => {
        return this.post('users/verify', verificationInfo)
    }

    sendVerificationCodeService = (email) => {
        return this.post('users/sendresetcode', email)
    }

    resetPasswordService = (resetInfo) => {
        return this.post('users/resetpassword', resetInfo)
    }
}

export const userService = new UserService();