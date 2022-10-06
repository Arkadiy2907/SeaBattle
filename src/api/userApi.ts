import { TSignUp } from '../pages/registration';
import { Client } from '../core/HTTP';

type TPassword = {
    oldPassword: string;
    newPassword: string;
};

const _http = new Client('/user');

class UserApi {
    changeProfile(data: TSignUp): Promise<unknown> {
        return _http.put('/profile', data);
    }

    changeAvatar(avatar: FormData): Promise<unknown> {
        return _http.put('/profile/avatar', avatar);
    }

    changeUserPassword(data: TPassword): Promise<unknown> {
        return _http.put('/password', data);
    }
}

const userApi = new UserApi();

export default userApi;
