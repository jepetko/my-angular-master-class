import {IAlbum, AlbumSize} from './ialbum'

export class Album implements IAlbum {

    constructor(public id: number, public name:string, public artist: string, public url: string) {
    }

    getImage(size:AlbumSize) {
    }

}