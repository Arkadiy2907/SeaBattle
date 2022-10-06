import { Client } from '../core/HTTP';
import { TSignUp } from '../pages/registration';
import { TLogin } from '../pages/login';

const _http: Client = new Client('/auth');

class AuthApi {
    signUp(data: TSignUp): Promise<unknown> {
        return _http.post('/signup', data);
    }

    signIn(data: TLogin): Promise<unknown> {
        return _http.post('/signin', data);
    }

    getUser(): Promise<unknown> {
        return _http.get('/user');
    }

    logOut(): Promise<unknown> {
        return _http.post('/logout');
    }
}

const authApi = new AuthApi();

export default authApi;
