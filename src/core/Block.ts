import EventBus from './EventBus';

import { nanoid } from 'nanoid';
// если так запустить то тесты работают
// но после сборки билда проходи но не запускается сервер 
// выходит ошибка Uncaught TypeError: Failed to resolve module specifier "nanoid". 
// Relative references must start with either "/", "./", or "../".

// import { nanoid } from '../../node_modules/nanoid/index';
// если так указывать то выходит ошибка при тесте: Unknown file extension ".ts"
// зато билд собирается и сервер запускается



// const { v4: uuidv4 } = require('/node_modules/uuid/dist/index');//то же как и с nanoid

// type Events = 'init' | 'flow:component-did-mount' | 'flow:component-did-update' | 'flow:render';

type TProps = Record<string, any>;

export default class Block<Props extends Record<string, any> = any> {
    eventBus: () => EventBus;

    tagName: string;

    props: Props;

    private _element: HTMLElement;

    children: Record<string, any>;

    id: string;

    constructor(tagName = 'div', propsAndChildren: Record<string, any> = {}) {
        const { children, props } = this._getChildren(propsAndChildren);
        this.children = children;
        const eventBus = new EventBus();
        this.eventBus = () => eventBus;
        this.id = /* uuidv4();  */nanoid(6);
        this.props = this._makePropsProxy({ ...props, id: this.id });
        this.tagName = tagName;
        this._registerEvents(eventBus);
        eventBus.emit('init');
    }

    private _registerEvents(eventBus: any) {
        eventBus.on('init', this.init.bind(this));
        eventBus.on('flow:component-did-mount', this._componentDidMount.bind(this));
        eventBus.on('flow:component-did-update', this._componentDidUpdate.bind(this));
        eventBus.on('flow:render', this._render.bind(this));
    }

    private _createResources() {
        this._element = this._createDocumentElement(this.tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit('flow:render');
    }

    private _componentDidMount(oldProps: TProps) {
        this.componentDidMount(oldProps);
        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((item) => {
                    item.dispatchComponentDidMount();
                });
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    componentDidMount(_oldProps: TProps) { }

    dispatchComponentDidMount() {
        this.eventBus().emit('flow:component-did-mount');
    }

    private _componentDidUpdate(oldProps: TProps, newProps: TProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(_oldProps: TProps, _newProps: TProps) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        const { children/* , props */ } = this._getChildren(nextProps);
        Object.assign(this.children, children);
        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element;
    }

    private _render() {
        const fragment = this.render();
        const element = fragment.firstElementChild as HTMLElement;

        this._removeEventListeners();

        this._element.innerHTML = '';
        this._element.replaceWith(element);
        this._element = element;
        this._addEventListeners();
    }

    render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent(): HTMLElement {
        return this.element;
    }

    private _makePropsProxy(props: any) {
        const proxyProps = new Proxy(props, {
            get(target, prop: string) {
                if (prop.startsWith('_')) {
                    throw new Error('нет доступа');
                } else {
                    const value = target[prop];
                    return typeof value === 'function' ? value.bind(target) : value;
                }
            },

            set(target, prop: string, value) {
                if (prop.startsWith('_')) {
                    throw new Error('нет доступа');
                } else {
                    target[prop] = value;
                    this.eventBus().emit('flow:component-did-update', target);
                    return true;
                }
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });

        return proxyProps;
    }

    private _createDocumentElement(tagName: any): HTMLElement {
        const element = document.createElement(tagName) as HTMLElement;
        return element;
    }

    show() {
        this.getContent().style.display = 'block';
    }

    hide() {
        this.getContent().style.display = 'none';
    }

    remove() {
        this.getContent().remove();
    }

    private _addEventListeners() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    private _removeEventListeners() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    private _getChildren(propsAndChildren: {}) {
        const children: TProps = {};
        const props: TProps = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (Array.isArray(value) && value[0] instanceof Block) {
                value.forEach((item, index) => {
                    if (!children[key]) {
                        children[key] = [];
                    }
                    children[key][index] = item;
                });
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    compile(template: any, props: any) {
        const propsAndStubs = { ...props };
        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                propsAndStubs[key] = [];
                child.forEach((item) => {
                    propsAndStubs[key].push({
                        [key]: `<div data-id="${item.id}"></div>`,
                    });
                });
            } else {
                propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
            }
        });

        const fragment = this._createDocumentElement(
            'template',
        ) as HTMLTemplateElement;
        fragment.innerHTML = template(propsAndStubs);
        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((item) => {
                    const stub = fragment.content.querySelector(`[data-id="${item.id}"]`);

                    if (stub) {
                        stub.replaceWith(item.getContent());
                    }
                });
            } else {
                const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
                if (stub) {
                    stub.replaceWith(child.getContent());
                }
            }
        });

        return fragment.content;
    }
}
