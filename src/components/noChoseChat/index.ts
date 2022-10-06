import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TNoChoseChat = {
    value: string;
}

export default class NoChoseChat extends Block<TNoChoseChat> {
    public constructor(props: TNoChoseChat) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
