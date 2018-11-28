import { map } from 'rxjs/operators';
import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
 private apiKey: string = "AIzaSyD_Pzh5yyMWyQhpe9awVI3sj5m47CwhuOU";
 private  youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
 private playList: string = "UUuaPTYj15JSkETGnEseaFFg";
 private nextToken: string = "";

  constructor(private http: Http) { }

  getYoutube(){
    let url = `${ this.youtubeUrl }/playlistItems`;
    let params = new URLSearchParams();

    params.set( 'part', 'snippet' );
    params.set( 'maxResults', '10' );
    params.set( 'playlistId', this.playList );
    params.set( 'key', this.apiKey );

    if(this.nextToken) {
      params.set( 'pageToken', this.nextToken );
    }

    return this.http.get( url, { search: params } ).pipe(map ( response => {
    console.log(response.json());
    this.nextToken = response.json().nextPageToken;

    let videos: any[] = [];

     for(let video of response.json().items) {
      let snippet = video.snippet;

      videos.push(snippet);
     
    }

    return videos;
     
    }) );
  }
}
