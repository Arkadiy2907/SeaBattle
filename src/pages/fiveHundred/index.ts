import Block from '../../core/Block';
import Link from '../../components/link';
import tpl from './tpl.hbs';

export default class FiveHundred extends Block {
    public constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({ value: 'назад к чатам', href: '/chooseChat' });

        super('div', {
            ...props,
            buttonText,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
