import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TBtnSendMessageProps = {
    value?: string;
    href?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class BtnSendMessage extends Block<TBtnSendMessageProps> {
    public constructor(props: TBtnSendMessageProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
