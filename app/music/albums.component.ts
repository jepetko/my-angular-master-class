/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {Component} from 'angular2/core';
import {MusicService} from './services/music.service';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {IAlbum} from "./models/ialbum";

@Component({
    selector: 'albums-component',
    template: `
        <h1>
            Albums
        </h1>
        <ul>
            <li *ngFor="#album of albums"  [routerLink]="['Album', { id : album.id }]">{{album.name}}</li>
        </ul>
    `,
    providers: [MusicService],
    directives : [ROUTER_DIRECTIVES]
})
export class AlbumsComponent {

    public albums: Array<IAlbum> = [];

    ngOnInit() {
        this.musicService.albumSearch("linkin", 1)
            .subscribe((results) => {
                this.albums = results.albums;
            })
    }

    constructor(private musicService:MusicService) {

    }
}