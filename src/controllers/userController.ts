import store from '../store';
import userApi from '../api/userApi';
import authController from './authController';
import { TSignUp } from '../pages/registration';

type TPassword = {
    oldPassword: string;
    newPassword: string;
};

class UserController {
    public async changeProfile(data: TSignUp) {
        try {
            await userApi.changeProfile(data);
            await authController.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async changeAvatar(file: File, image: HTMLImageElement) {
        try {
            const data = new FormData();
            const fileNameFileSystemUser = 1;
            data.append('avatar', file, `avatar.${file.type.split('/')[fileNameFileSystemUser]}`);
            await userApi.changeAvatar(data);
            this.updateImage(file, image);
            await authController.getUser();
        } catch (e: any) {
            return e.reason;
        }
    }

    public updateImage(file: File, image: HTMLImageElement) {
        const reader = new FileReader();

        reader.onload = async (e) => {
            const base64 = e.target!.result;
            const newImage = { ...image, src: base64 };
            newImage.src = base64;
            store.changeState({ avatarIcon: base64 }, true);
        };

        reader.readAsDataURL(file);
    }

    public async changeUserPassword(data: TPassword) {
        try {
            await userApi.changeUserPassword(data);
            await authController.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }
}

const userController = new UserController();

export default userController;
