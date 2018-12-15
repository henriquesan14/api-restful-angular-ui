import { Component, ViewChild } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { Playlist } from '../interfaces/playlist';


@Component({
  selector: 'app-cadastro-playlists',
  templateUrl: './cadastro-playlists.component.html',
  styleUrls: ['./cadastro-playlists.component.css']
})
export class CadastroPlaylistsComponent {

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private playlistService: PlaylistService, private router: Router) { }

  addPlaylist(playlist: Playlist) {
    this.playlistService.addPlaylist(playlist)
    .subscribe(() => {this.router.navigateByUrl('/'); },
     () => {this.errorMsgComponent.setError('Falha ao adicionar playlist'); });
  }
}
