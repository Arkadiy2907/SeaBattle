import { expect } from 'chai';
import Router from './Router';
import Block from '../Block';

describe('test router', () => {
    const router = new Router('#root');

    class Login extends Block { }
    class Registration extends Block { }
    class ChooseChat extends Block { }
    class Profile extends Block { }

    document.addEventListener('DOMContentLoaded', () => {
        router
            .use('/', Login)
            .use('/registration', Registration)
            .use('/chooseChat', ChooseChat)
            .use('/profile', Profile)
            .start();
    });

    it('if change page must change history', () => {
        router.go('/registration');
        router.go('/chooseChat');
        router.go('/profile');

        expect(router.history.length).to.eq(4);
    });
});
