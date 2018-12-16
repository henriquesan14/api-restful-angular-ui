import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist';

@Component({
  selector: 'app-form-playlist',
  templateUrl: './form-playlist.component.html',
  styleUrls: ['./form-playlist.component.css']
})
export class FormPlaylistComponent implements OnInit {

  title: string;
  @Input() playlist: Playlist = <Playlist>{};
  @Input() id: number;
  @Output() outputPlaylist: EventEmitter<Playlist> = new EventEmitter();

  onSubmit() {
    this.outputPlaylist.emit(this.playlist);
  }

  ngOnInit(){
    if (this.id == undefined){
      this.title = 'Nova Playlist';
    } else {
      this.title = 'Editar Playlist';
    }
  }


}
