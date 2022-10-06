import Block from '../../core/Block';
import { router } from '../..';
import authController from '../../controllers/authController';
import Link from '../../components/link';
import tpl from './tpl.hbs';

export default class Warning extends Block {
    public constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({
            value: 'жми сюда и перелогинься чтоб зайти в чат!!',
            events: {
                click: (event) => {
                    event.preventDefault();
                    authController.logOut();
                    router.go('/login');
                },
            },
        });

        super('div', {
            ...props,
            buttonText,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
