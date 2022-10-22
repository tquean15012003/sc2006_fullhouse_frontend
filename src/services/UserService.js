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
}

export const userService = new UserService();