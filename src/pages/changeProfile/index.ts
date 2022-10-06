import Block from '../../core/Block';
import { router } from '../..';
import userController from '../../controllers/userController';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage, getResForm } from '../../core/valid';
import { getAvatar, getUserData } from '../../utils/getUserData';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Avatar from '../../components/avatar';
import Input from '../../components/input/index';
import ButtonBlue from '../../components/button';
import tpl from './tpl.hbs';
import startPic from '../../image/cat.png';
import { TSignUp } from '../registration';

export default class ChangeProfile extends Block {
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

        const {
            email, login, firstName, secondName, phone, displayName,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            class: 'changeProfileEmail',
            value: currentUser?.email,
            events: {
                blur: (e) => {
                    eventBlur(e, email);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputLogin = new Input({
            ...login,
            class: 'changeProfileLogin',
            value: currentUser?.login,
            events: {
                blur: (e) => {
                    eventBlur(e, login);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputFirstName = new Input({
            ...firstName,
            class: 'changeProfileFirstName',
            value: currentUser?.first_name,
            events: {
                blur: (e) => {
                    eventBlur(e, firstName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputSecondName = new Input({
            ...secondName,
            class: 'changeProfileSecondName',
            value: currentUser?.second_name,
            events: {
                blur: (e) => {
                    eventBlur(e, secondName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputDisplayName = new Input({
            ...displayName,
            class: 'changeProfileDisplayName',
            value: currentUser?.display_name,
            events: {
                blur: (e) => {
                    eventBlur(e, displayName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPhone = new Input({
            ...phone,
            class: 'changeProfilePhone',
            value: currentUser?.phone,
            events: {
                blur: (e) => {
                    eventBlur(e, phone);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const btnSave = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputEmailTarget = document.querySelector<HTMLInputElement>('.changeProfileEmail');
                    const inputLoginTarget = document.querySelector<HTMLInputElement>('.changeProfileLogin');
                    const inputFirstNameTarget = document.querySelector<HTMLInputElement>('.changeProfileFirstName');
                    const inputSecondNameTarget = document.querySelector<HTMLInputElement>('.changeProfileSecondName');
                    const inputPhoneTarget = document.querySelector<HTMLInputElement>('.changeProfilePhone');

                    const validEmail = inputIsNotValid({
                        input: validMessage.email,
                        target: inputEmailTarget!,
                        value: inputEmailTarget!.value,
                        message: validMessage.email.message,
                    });

                    const validLogin = inputIsNotValid({
                        input: validMessage.login,
                        target: inputLoginTarget!,
                        value: inputLoginTarget!.value,
                        message: validMessage.login.message,
                    });

                    const validFirstName = inputIsNotValid({
                        input: validMessage.firstName,
                        target: inputFirstNameTarget!,
                        value: inputFirstNameTarget!.value,
                        message: validMessage.firstName.message,
                    });

                    const validSecondName = inputIsNotValid({
                        input: validMessage.secondName,
                        target: inputSecondNameTarget!,
                        value: inputSecondNameTarget!.value,
                        message: validMessage.secondName.message,
                    });

                    const validPhone = inputIsNotValid({
                        input: validMessage.phone,
                        target: inputPhoneTarget!,
                        value: inputPhoneTarget!.value,
                        message: validMessage.phone.message,
                    });

                    const {
                        email, login, firstName, secondName, phone,
                    } = getResForm('form');

                    const data: TSignUp = {
                        email,
                        login,
                        first_name: firstName,
                        second_name: secondName,
                        phone,
                        display_name: login,
                    };

                    if (
                        validEmail
                        && validLogin
                        && validFirstName
                        && validSecondName
                        && validPhone
                    ) {
                        userController.changeProfile(data).then((result) => {
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
            titleEmail: propsInput.email.label,
            titleLogin: propsInput.login.label,
            titleFirstName: propsInput.firstName.label,
            titleSecondName: propsInput.secondName.label,
            titledisplayName: propsInput.displayName.label,
            titlePhone: propsInput.phone.label,
        };

        super('div', {
            ...props,
            prevArrow,
            avatarLog,
            btnSave,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputDisplayName,
            inputPhone,
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
