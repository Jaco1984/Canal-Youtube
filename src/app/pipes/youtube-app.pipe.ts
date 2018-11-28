import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'youtubeApp'
})
export class YoutubeAppPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {}

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";


    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
