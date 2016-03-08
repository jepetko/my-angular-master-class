import {Album} from './album'

describe('album', () => {
    it('has an id', () => {
        let album = new Album(1, 'Meteora', 'Linkin park');
        expect(album.id).toEqual(1);
    });
});