import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TAvatarProps = {
    displayName: string;
    src?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Avatar extends Block<TAvatarProps> {
    public constructor(props: TAvatarProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
