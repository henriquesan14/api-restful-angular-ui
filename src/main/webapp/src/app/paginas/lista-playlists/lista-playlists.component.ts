import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-playlists',
  templateUrl: './lista-playlists.component.html',
  styleUrls: ['./lista-playlists.component.css']
})
export class ListaPlaylistsComponent implements OnInit {

  public playlists: any[];

  @ViewChild (ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getListaPlaylists();
  }
  getListaPlaylists() {
    this.playlistService.getListaPlaylists()
      .subscribe((playlists: any[]) => {
        this.playlists = playlists;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar playlists.'); });
  }

  existemPlaylists(): boolean {
    return this.playlists && this.playlists.length > 0;
  }

}
