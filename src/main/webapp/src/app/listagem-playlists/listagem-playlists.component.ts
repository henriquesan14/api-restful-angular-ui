import { Component, OnInit, ViewChild} from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Playlist } from '../interfaces/playlist';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';


@Component({
  selector: 'app-listagem-playlists',
  templateUrl: './listagem-playlists.component.html',
  styleUrls: ['./listagem-playlists.component.css']
})
export class ListagemPlaylistsComponent implements OnInit {

  public playlists: Playlist[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private playlistService: PlaylistService) {

   }

  ngOnInit() {
    this.getListaPlaylists();
  }

  getListaPlaylists(){
    this.playlistService.getListaPlaylists()
    // tslint:disable-next-line:max-line-length
    .subscribe((playlists: Playlist[]) => {this.playlists = playlists;}, () =>{this.errorMsgComponent.setError('Falha ao buscar playlists'); });

  }

  deletaPlaylist(id: number){
    this.playlistService.deletaPlaylist(id)
    .subscribe(() => {this.getListaPlaylists(); }, () => {this.errorMsgComponent.setError('Falha ao buscar playlists'); });
  }

  existemPlaylist(): boolean {
    return this.playlists && this.playlists.length > 0;
  }

}
