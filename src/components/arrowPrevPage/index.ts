import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TArrowProps = {
    value?: string;
    href?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class ArrowPrevPage extends Block<TArrowProps> {
    public constructor(props: TArrowProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
