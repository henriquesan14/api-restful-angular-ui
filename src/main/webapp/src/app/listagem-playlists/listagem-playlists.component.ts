import { Component, OnInit} from '@angular/core';
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'app-listagem-playlists',
  templateUrl: './listagem-playlists.component.html',
  styleUrls: ['./listagem-playlists.component.css']
})
export class ListagemPlaylistsComponent implements OnInit {

  playlists;

  constructor(private playlistService:PlaylistService) {

   }

  ngOnInit() {
    this.playlistService.getListaPlaylists()
    .subscribe(dados => this.playlists = dados);
  }

}
