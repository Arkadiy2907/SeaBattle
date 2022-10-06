import Block from '../../core/Block';
import { router } from '../..';
import authController from '../../controllers/authController';
import { propsInput } from '../../stubs/constantsForms';
import { inputIsNotValid, validMessage, getResForm } from '../../core/valid';
import { eventFocus, eventBlur } from '../../utils/eventForms';
import Link from '../../components/link';
import ButtonBlue from '../../components/button';
import Input from '../../components/input/index';
import tpl from './tpl.hbs';

export type TSignUp = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password?: string;
    display_name?: string;
    phone: string;
};

export default class Registration extends Block {
    public constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({
            value: 'Войти',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/login');
                },
            },
        });

        const {
            email, login, firstName, secondName, phone, password, passwordAgain,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            class: 'registrationEmail',
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
            class: 'registrationLogin',
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
            class: 'registrationFirstName',
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
            class: 'registrationSecondName',
            events: {
                blur: (e) => {
                    eventBlur(e, secondName);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPhone = new Input({
            ...phone,
            class: 'registrationPhone',
            events: {
                blur: (e) => {
                    eventBlur(e, phone);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const inputPassword = new Input({
            ...password,
            class: 'registrationPassword',
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
            class: 'registrationPasswordAgain',
            events: {
                blur: (e) => {
                    eventBlur(e, passwordAgain);
                },
                focus: (e) => {
                    eventFocus(e);
                },
            },
        });

        const buttonBlue = new ButtonBlue({
            value: 'Зарегистрироваться',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const inputEmailTarget = document.querySelector<HTMLInputElement>('.registrationEmail');
                    const inputLoginTarget = document.querySelector<HTMLInputElement>('.registrationLogin');
                    const inputFirstNameTarget = document.querySelector<HTMLInputElement>('.registrationFirstName');
                    const inputSecondNameTarget = document.querySelector<HTMLInputElement>('.registrationSecondName');
                    const inputPhoneTarget = document.querySelector<HTMLInputElement>('.registrationPhone');
                    const inputPasswordTarget = document.querySelector<HTMLInputElement>('.registrationPassword');
                    const inputPasswordAgainTarget = document.querySelector<HTMLInputElement>('.registrationPasswordAgain');

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
                        email, login, firstName, secondName, phone, password,
                    } = getResForm('form');

                    const data: TSignUp = {
                        email,
                        login,
                        first_name: firstName,
                        second_name: secondName,
                        phone,
                        password,
                    };

                    if (
                        validEmail
                        && validLogin
                        && validFirstName
                        && validSecondName
                        && validPhone
                        && validPassword
                        && validPasswordAgain
                    ) {
                        authController.signUp(data).then((result) => {
                            if (result?.success) {
                                router.go('/chooseChat');
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
            titlePhone: propsInput.phone.label,
            titlePassword: propsInput.password.label,
            titlePasswordAgain: propsInput.passwordAgain.label,
        };

        super('div', {
            ...props,
            inputEmail,
            inputLogin,
            inputFirstName,
            inputSecondName,
            inputPhone,
            inputPassword,
            inputPasswordAgain,
            buttonText,
            buttonBlue,
            title: 'Регистрация',
            ...forTitle,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
