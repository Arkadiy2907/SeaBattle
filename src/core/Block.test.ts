import { describe } from 'mocha';
import { expect } from 'chai';
import Block from './block';

describe('Test Block', () => {
    const block = new Block('div', {
        className: 'component',
    });

    it('block must have correct props', () => {
        expect(block.props.className).to.equal('component');
    });

    it('block have id', () => {
        expect(block.id).to.be.a('string');
    });
});
