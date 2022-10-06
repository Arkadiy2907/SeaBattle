import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TMessageProps = {
    avatar?: string;
    title?: string;
    href?: string;
    myMessage?: string;
    created_by?: number;
    last_message?: Record<string, any>;
    time?: Date;
    id: number;
    unread_count?: number;
    click?: () => Promise<void>;
    events?: {
        click: () => void;
    };
}

export default class Message extends Block<TMessageProps> {
    public constructor(props: TMessageProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
