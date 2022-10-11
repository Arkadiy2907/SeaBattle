import Block from '../../core/Block';
import { router } from '../..';
import authController from '../../controllers/authController';
import { propsInput } from '../../stubs/constantsForms';
import { getAvatar, getUserData } from '../../utils/getUserData';
import ArrowPrevPage from '../../components/arrowPrevPage';
import Link from '../../components/link';
import Avatar from '../../components/avatar';
import Input from '../../components/input';
import tpl from './tpl.hbs';
import startPic from '../../image/cat.png';

export default class Profile extends Block {
    public constructor(props: Record<string, any> = {}) {
        const prevArrow = new ArrowPrevPage({
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/chooseChat');
                },
            },
        });
        const changeProfileBtn = new Link({
            value: 'Изменить данные',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/changeProfile');
                },
            },
        });
        const changePasswordBtn = new Link({
            value: 'Изменить пароль',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/changePassword');
                },
            },
        });
        const buttonTextOut = new Link({
            value: 'Выход из профиля',
            events: {
                click: (e) => {
                    e.preventDefault();
                    authController.logOut();
                    router.go('/');
                },
            },
        });

        const currentUser = getUserData() || {};
        const avatarIcon = getAvatar();

        const avatarLog = new Avatar({
            displayName: `${currentUser?.login}`,
            src: avatarIcon || startPic,
            events: {
                click: (e) => {
                    e.preventDefault();
                    router.go('/loadAvatar');
                },
            },
        });

        const {
            email, login, firstName, secondName, phone, displayName,
        } = propsInput;

        const inputEmail = new Input({
            ...email,
            readonly: 'readonly',
            value: currentUser?.email,
        });

        const inputLogin = new Input({
            ...login,
            readonly: 'readonly',
            value: currentUser?.login,
        });

        const inputFirstName = new Input({
            ...firstName,
            readonly: 'readonly',
            value: currentUser?.first_name,
        });

        const inputSecondName = new Input({
            ...secondName,
            readonly: 'readonly',
            value: currentUser?.second_name,
        });

        const inputDisplayName = new Input({
            ...displayName,
            readonly: 'readonly',
            value: currentUser?.display_name,
        });

        const inputPhone = new Input({
            ...phone,
            readonly: 'readonly',
            value: currentUser?.phone,
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
            changeProfileBtn,
            changePasswordBtn,
            buttonTextOut,
            avatarLog,
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
