import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {IAlbum} from '../models/ialbum';
import {Album} from '../models/album';

const API_KEY: string = "96b97592615589a27ee69e5f9469beb4";

@Injectable()
export class MusicService {

    constructor(private http:Http) {
    }

    private getApiUrl(query: string, page: number): string {
        return `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&format=json&api_key=${API_KEY}&page=${page}`;
    }

    albumSearch(query: string, page: number = 1) {
        return new Observable((observable) => {
            this.http.get(this.getApiUrl(query, page))
            .map((res) => {
                res = res.json();
                let albums: Array<IAlbum> = [];
                let results = res.results;
                results.albummatches.album.forEach((data) => {
                    albums.push(new Album(data["mbid"], data["name"], data["artist"], data["url"]));
                });

                return {
                    albums : albums
                };
            })
            .subscribe((res) => {
                observable.next(res);
            });
        });
    }
}

