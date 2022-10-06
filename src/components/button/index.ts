import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TButtonBlueProps = {
    value: string;
    href?: string;
    type?: string;
    events?: {
        click: (event: Event) => void;
	};	
};

export default class ButtonBlue extends Block<TButtonBlueProps> {
    public constructor(props: TButtonBlueProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
