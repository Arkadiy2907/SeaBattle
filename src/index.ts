import Router from './core/router/Router';
import Login from './pages/login';
import warning from './pages/warning';
import FiveHundred from './pages/fiveHundred';
import Registration from './pages/registration';
import ChooseChat from './pages/chooseChat';
import Profile from './pages/profile';
import ChangeProfile from './pages/changeProfile';
import ChangePassword from './pages/changePassword';
import LoadAvatar from './pages/loadAvatar';
import './scss/style.scss';

export const router = new Router('#root');

const { pathname } = window.location;

document.addEventListener('DOMContentLoaded', () => {
    router
        .use('/', Login)
        .use('/login', Login)
        .use('/registration', Registration)

        .use('/chooseChat', ChooseChat)
        .use('/chooseChatActive', ChooseChat)

        .use('/profile', Profile)
        .use('/changeProfile', ChangeProfile)
        .use('/changePassword', ChangePassword)

        .use('/loadAvatar', LoadAvatar)

        .use('/fiveHundred', FiveHundred)
        .use('/warning', warning)
        .use('*', FiveHundred)

    let isStartRoute = true;

    if (pathname === '/' || pathname === '/login' || pathname === '/registration') {
        isStartRoute = false;
    }

    try {
        const { login } = JSON.parse(localStorage.getItem('user')!);
        router.start();

        if (login) {            
            router.go('/chooseChat');
        }
    } catch (e) {
        router.start();

        if (isStartRoute) {
            router.go('/');
        }
    }
});
