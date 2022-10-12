import { expect } from 'chai';
import Link from './index';

describe('Link', () => {
    it('should render', () => {
        new Link({ value: 'Upss' });
    });

    it('element should return span', () => {
        const link = new Link({ value: 'Upss' });
        const { element } = link;

        expect(element).to.be.instanceof(window.HTMLSpanElement);
    });
});
