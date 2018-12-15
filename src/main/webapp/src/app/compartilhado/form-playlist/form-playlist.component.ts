import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist';

@Component({
  selector: 'app-form-playlist',
  templateUrl: './form-playlist.component.html',
  styleUrls: ['./form-playlist.component.css']
})
export class FormPlaylistComponent {

  @Input() playlist: Playlist = <Playlist>{};
  @Output() outputPlaylist: EventEmitter<Playlist> = new EventEmitter();

  onSubmit() {
    this.outputPlaylist.emit(this.playlist);
  }


}
