import { onBlur, onFocus } from '../core/valid';

export const eventFocus = (x: InputEvent) => {
    const target = x.target as HTMLInputElement;
    onFocus({ target });
};

export const eventBlur = (x: InputEvent, y: any) => {
    const target = x.target as HTMLInputElement;
    const { value } = target;
    onBlur({
        target,
        value,
        name: y.name,
    });
};
