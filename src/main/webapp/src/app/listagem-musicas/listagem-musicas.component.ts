import { Component, OnInit, ViewChild } from '@angular/core';
import { MusicaService } from '../services/musica.service';
import { Musica } from '../interfaces/musica';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-musicas',
  templateUrl: './listagem-musicas.component.html',
  styleUrls: ['./listagem-musicas.component.css']
})
export class ListagemMusicasComponent implements OnInit {

  public musicas: Musica[];
  public id: number;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private musicaService: MusicaService,
    private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.params.id;
     }

  ngOnInit() {
    this.getListaMusicas(this.id);
  }

  getListaMusicas(id: number) {
    this.musicaService.getMusicas(id)
    // tslint:disable-next-line:max-line-length
    .subscribe((musicas: Musica[]) => {this.musicas = musicas; }, () => {this.errorMsgComponent.setError('Falha ao buscar músicas'); });

  }

  deletaMusica(id: number, idMusica: number) {
    this.musicaService.deletaPlaylist(id, idMusica)
    .subscribe(() => {this.getListaMusicas(id); }, () => {this.errorMsgComponent.setError('Falha ao buscar musicas'); });
  }

  existemMusicas(): boolean {
    return this.musicas && this.musicas.length > 0;
  }

}
