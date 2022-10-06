import store from '../store';
import authApi from '../api/authApi';
import { TSignUp } from '../pages/registration';
import { TLogin } from '../pages/login';

class AuthController {
    public async login(data: TLogin) {
        try {
            await authApi.signIn(data);
            await this.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async signUp(data: TSignUp) {
        try {
            await authApi.signUp(data);
            await this.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async logOut() {
        try {
            await authApi.logOut();
        } catch (e: any) {
            return e.reason;
        }
    }

    public async getUser() {
        let res;
        try {
            res = await authApi.getUser();
        } catch (e: any) {
            res = e.reason;
        }
        if (res !== 'Not found') {
            store.changeState({ user: res });
        }
        return res;
    }
}

const authController = new AuthController();

export default authController;
