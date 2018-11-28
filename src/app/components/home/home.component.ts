import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video: any[] = [];
  videoSel: any;

  constructor( private _ytb: YoutubeService ) { 
    this._ytb.getYoutube().subscribe(  data => this.video = data );
  }

  ngOnInit() {
  }

  verVideo( videos: any){
  this.videoSel = videos;
  $('#myModal').modal(); 
  }

  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  cargarMas(){
    this._ytb.getYoutube().subscribe(  data => this.video.push.apply( this.video, data ) );
  }

}
