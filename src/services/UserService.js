import { baseService } from "./BaseService";

export class UserService extends baseService {
    loginService = (loginInfo) => {
        return this.post('users/signin', loginInfo);
    }
    
    signUpService = (user) => {
        return this.post('users/signup', user)
    }
}

export const userService = new UserService();