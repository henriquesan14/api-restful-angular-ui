import { Component, ViewChild} from '@angular/core';
import { Musica } from '../interfaces/musica';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { MusicaService } from '../services/musica.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao-musicas',
  templateUrl: './edicao-musicas.component.html',
  styleUrls: ['./edicao-musicas.component.css']
})
export class EdicaoMusicasComponent {

  public musica: Musica;
  id: number;
  idMusica: number;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private musicaService: MusicaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.idMusica = this.activatedRoute.snapshot.params.idMusica;
      this.getMusica(this.activatedRoute.snapshot.params.id, this.activatedRoute.snapshot.params.idMusica);
  }


     getMusica(id: number, idMusica: number ) {
      this.musicaService.getMusica(id, idMusica)
      .subscribe((musica: Musica) => {this.musica = musica; },
      () => { this.errorMsgComponent.setError('Falha ao buscar playlist'); });
    }

    atualizaMusica(musica: Musica){
      this.musicaService.atualizaPlaylist(musica, this.id, this.idMusica)
      .subscribe( () => {this.router.navigateByUrl(`/playlist/${this.id}/musicas`); },
      () => {this.errorMsgComponent.setError('Falha ao atualizar playlist'); });
    }


}
