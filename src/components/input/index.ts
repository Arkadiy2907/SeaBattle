import Block from '../../core/Block';
import tpl from './tpl.hbs';

type TInputProps = {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    readonly?: string;
    class?: string;
    value?: string;
    events?: {
        blur: (event: InputEvent) => void;
        focus: (event: InputEvent) => void;
    };
}
class Input extends Block<TInputProps> {
    public constructor(props: TInputProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

export default Input;
