import { expect } from 'chai';
import { Client } from './HTTP';

describe('Test HTTP', () => {
    const http: Client = new Client('/auth');

    it('Test get (get user on id)', () => {
        http.get('https://ya-praktikum.tech/api/v2/user/92369').then((resp: any) => expect(resp).to.have.property('id').and.equal(92369));
    });

    it('Test post (find user on login)', () => {
        http.post('https://ya-praktikum.tech/api/v2/user/search', {
            headers: { 'content-type': 'application/json' },
            data: { login: 'Zxcvbn' },
        }).then((resp) => expect(resp).to.have.property('id').and.equal(92369));
    });
});
