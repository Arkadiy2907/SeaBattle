import renderDom from '../renderDOM';
import Block from '../Block';

export class Route {
    private _pathname: string;

    private _blockClass: typeof Block;

    private _block: Block | null;
    
    private _props: Record<string, any>;

    constructor(pathname: string, view: typeof Block, props: Record<string, any>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return pathname === this._pathname;
    }

    render() {
        this._block = new this._blockClass();
        renderDom(this._props.rootQuery, this._block);
    }
}

