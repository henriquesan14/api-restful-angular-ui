import { Component, OnInit, ViewChild} from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Playlist } from '../interfaces/playlist';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { Page } from '../interfaces/page';


@Component({
  selector: 'app-listagem-playlists',
  templateUrl: './listagem-playlists.component.html',
  styleUrls: ['./listagem-playlists.component.css']
})
export class ListagemPlaylistsComponent implements OnInit {

  public playlists: Playlist[];
  public page: Page = <Page>{};
  public pageNumb = 0;
  public size = 5;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private playlistService: PlaylistService) {

   }

   ngOnInit() {
    this.getListaPlaylists(this.pageNumb, this.size);
  }

  totalPages() {
    const pages = [];
    for( let i = 0; i < this.page.totalPages; i++){
      pages.push(i);
    }
    return pages;
  }

  getListaPlaylists(pageNum: number, size: number){
    this.playlistService.getListaPlaylists(pageNum, size)
    // tslint:disable-next-line:max-line-length
    .subscribe((page: Page) => {this.page = page; this.playlists = this.page.content; }, () =>{this.errorMsgComponent.setError('Falha ao buscar playlists'); });
  }

  deletaPlaylist(id: number){
    this.playlistService.deletaPlaylist(id)
    // tslint:disable-next-line:max-line-length
    .subscribe(() => {this.getListaPlaylists(this.page.number, this.size); }, () => {this.errorMsgComponent.setError('Falha ao buscar playlists'); });
  }

  existemPlaylist(): boolean {
    return this.playlists && this.playlists.length > 0;
  }

}
