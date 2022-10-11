import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TLinkProps = {
    value: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Link extends Block<TLinkProps> {
    public constructor(props: TLinkProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
