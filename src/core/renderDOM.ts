import Block from './Block';

export default function renderDom(selector: string, block: Block) {
    const root = document.querySelector(selector) as HTMLElement;

    if (!root) {
        throw new Error('Root not found');
    }
    root.innerHTML = '';
    root.appendChild(block.getContent());

    return renderDom;
}
