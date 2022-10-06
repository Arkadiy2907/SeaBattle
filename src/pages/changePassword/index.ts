import Block from '../../core/Block';
import { router } from '../..';
import userController from '../../controllers/userController';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage, getResForm } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import { getAvatar, getUserData } from '../../utils/getUserData';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import ButtonBlue from '../../components/button';
import Input from '../../components/input';
import tpl from './tpl.hbs';
import startPic from '../../image/cat.png';

type TPassword = {
    oldPassword: string;
    newPassword: string;
};

export default class ChangePassword extends Block {
    public constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/profile');
                },
            },
        });

        const currentUser = getUserData() || {};
        const avatarIcon = getAvatar();

        const avatarLog = new Avatar({
            displayName: `${currentUser?.login}`,
            src: avatarIcon || startPic,
        });

        const { oldPassword, password, passwordAgain } = propsInput;

        const inputOldPassword = new Input({
            ...oldPassword,
            class: 'changePasswordOldPassword',
            events: {
                blur: (e) => {
                    eventBlur(e, oldPassword);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });
        const inputPassword = new Input({
            ...password,
            class: 'changePasswordPassword',
            events: {
                blur: (e) => {
                    eventBlur(e, password);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPasswordAgain = new Input({
            ...passwordAgain,
            class: 'changePasswordPasswordAgain',
            events: {
                blur: (e) => {
                    eventBlur(e, passwordAgain);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });
        const btnSaveCangePasword = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputOldPasswordTarget = document.querySelector<HTMLInputElement>('.changePasswordOldPassword');
                    const inputPasswordTarget = document.querySelector<HTMLInputElement>('.changePasswordPassword');
                    const inputPasswordAgainTarget = document.querySelector<HTMLInputElement>('.changePasswordPasswordAgain');

                    const validOldPassword = inputIsNotValid({
                        input: validMessage.oldPassword,
                        target: inputOldPasswordTarget!,
                        value: inputOldPasswordTarget!.value,
                        message: validMessage.oldPassword.message,
                    });

                    const validPassword = inputIsNotValid({
                        input: validMessage.password,
                        target: inputPasswordTarget!,
                        value: inputPasswordTarget!.value,
                        message: validMessage.password.message,
                    });

                    const validPasswordAgain = inputIsNotValid({
                        input: validMessage.passwordAgain,
                        target: inputPasswordAgainTarget!,
                        value: inputPasswordAgainTarget!.value,
                        message: validMessage.passwordAgain.message,
                    });

                    const {
                        oldPassword, password,
                    } = getResForm('form');

                    const data: TPassword = {
                        oldPassword,
                        newPassword: password,
                    };

                    if (
                        validOldPassword
                        && validPassword
                        && validPasswordAgain
                    ) {
                        userController.changeUserPassword(data).then((result) => {
                            if (result?.success) {
                                router.go('/profile');
                            } else {
                                router.go('/warning');
                            }
                        });
                    }
                },
            },
        });

        const forTitle = {
            titleOldPassword: propsInput.oldPassword.label,
            titlePassword: propsInput.password.label,
            titlePasswordAgain: propsInput.passwordAgain.label,
        };

        super('div', {
            ...props,
            prevArrow,
            avatarLog,
            inputOldPassword,
            inputPassword,
            inputPasswordAgain,
            btnSaveCangePasword,
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
