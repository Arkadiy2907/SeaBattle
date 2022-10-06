import Block from '../../core/Block';
import { router } from '../../index';
import ButtonBlue from '../button';
import tpl from './tpl.hbs';

type TReloadAvatarProps = {
    src?: string;
    events?: {
        click?: (event: Event) => void;
        change?: () => void;
    };
}

export default class ReloadAvatar extends Block<TReloadAvatarProps> {
    public constructor(props: TReloadAvatarProps) {
        const buttonBlue = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/profile');
                },
            },
        });

        super('div', { ...props, buttonBlue });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
