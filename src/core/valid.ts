import { regExp, errorMessage } from '../utils/forRegExp';
import { propsInput } from '../stubs/constantsForms';

interface IValidMessage {
    message: string;
    regExp?: RegExp;
    isValid: (value: any) => boolean;
}

interface InputIsNotValid {
    input: IValidMessage;
    target: HTMLInputElement;
    value: any;
    message: string;
}

interface IBlurProps {
    target: HTMLInputElement;
    value: any;
    name: string;
}

interface ITarget {
    target: HTMLInputElement;
}

export const getResForm = (form: string) => {
    const dataObject: Record<string, any> = {};
    const formElement = document.querySelector<HTMLFormElement>(form);
    const formData = new FormData(formElement!);
    for (const [name, value] of formData) {
        dataObject[name] = value;
    }

    return dataObject;
};

export const removeErrorMessage = (target: any) => {
    const error = target.nextElementSibling;
    error.style.visibility = 'hidden';
    error.textContent = '';
};

export const onBlur = ({ target, value, name }: IBlurProps) => {
    const {
        login, firstName, secondName, email, oldPassword, password, passwordAgain, phone,
    } = validMessage;

    switch (name) {
    case propsInput.login.name:
        value !== ''
                && inputIsNotValid({
                    input: login,
                    target,
                    value,
                    message: login.message,
                });
        break;
    case propsInput.firstName.name:
        value !== ''
                && inputIsNotValid({
                    input: firstName,
                    target,
                    value,
                    message: firstName.message,
                });
        break;
    case propsInput.secondName.name:
        value !== ''
                && inputIsNotValid({
                    input: secondName,
                    target,
                    value,
                    message: secondName.message,
                });
        break;
    case propsInput.email.name:
        value !== ''
                && inputIsNotValid({
                    input: email,
                    target,
                    value,
                    message: email.message,
                });
        break;
    case propsInput.oldPassword.name:
        value !== ''
                && inputIsNotValid({
                    input: oldPassword,
                    target,
                    value,
                    message: oldPassword.message,
                });
        break;
    case propsInput.password.name:
        value !== ''
                && inputIsNotValid({
                    input: password,
                    target,
                    value,
                    message: password.message,
                });
        break;
    case propsInput.passwordAgain.name:
        value !== ''
                && inputIsNotValid({
                    input: passwordAgain,
                    target,
                    value,
                    message: passwordAgain.message,
                });
        break;
    case propsInput.phone.name:
        value !== ''
                && inputIsNotValid({
                    input: phone,
                    target,
                    value,
                    message: phone.message,
                });
        break;
    default:
        console.log('Upss!');
    }
};

export const inputIsNotValid = ({
    input, target, value, message,
}: InputIsNotValid) => {
    !input.isValid(value) && addErrorMessage(target, message);
    return input.isValid(value);
};

export const addErrorMessage = (input: any, message: string) => {
    const error = input.parentNode.children[1];
    error.style.visibility = 'visible';
    error.textContent = message;
};

export const validMessage = {
    login: {
        message: errorMessage.login,
        regExp: regExp.login,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    firstName: {
        message: errorMessage.name,
        regExp: regExp.name,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    secondName: {
        message: errorMessage.name,
        regExp: regExp.name,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    email: {
        message: errorMessage.email,
        regExp: regExp.email,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    password: {
        message: errorMessage.password,
        regExp: regExp.password,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    oldPassword: {
        message: errorMessage.password,
        regExp: regExp.password,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    passwordAgain: {
        message: errorMessage.password,
        regExp: regExp.password,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
    phone: {
        message: errorMessage.phone,
        regExp: regExp.phone,
        isValid(value: string) {
            return this.regExp.test(value);
        },
    },
};

export const onFocus = ({ target }: ITarget) => {
    removeErrorMessage(target);
};
