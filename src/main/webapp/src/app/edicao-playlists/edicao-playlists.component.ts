import { Component, ViewChild} from '@angular/core';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { Playlist } from '../interfaces/playlist';
import { PlaylistService } from '../services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao-playlists',
  templateUrl: './edicao-playlists.component.html',
  styleUrls: ['./edicao-playlists.component.css']
})
export class EdicaoPlaylistsComponent  {

  public playlist: Playlist;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private playlistService: PlaylistService,
    private activedRouted: ActivatedRoute,
    private router: Router) {
      this.getPlaylist(this.activedRouted.snapshot.params.id);
     }

  getPlaylist(id: number) {
    this.playlistService.getPlaylist(id)
    .subscribe((playlist: Playlist) => {this.playlist = playlist; },
    () => { this.errorMsgComponent.setError('Falha ao editar playlist'); });
  }

  atualizaPlaylist(playlist: Playlist) {
    this.playlistService.atualizaPlaylist(playlist)
    .subscribe( () => {this.router.navigateByUrl('/'); },
    () => {this.errorMsgComponent.setError('Falha ao atualizar playlist'); });
  }


}
