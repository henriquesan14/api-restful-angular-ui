import { Component, ViewChild} from '@angular/core';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { MusicaService } from '../services/musica.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Musica } from '../interfaces/musica';

@Component({
  selector: 'app-cadastro-musicas',
  templateUrl: './cadastro-musicas.component.html',
  styleUrls: ['./cadastro-musicas.component.css']
})
export class CadastroMusicasComponent{

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  id: number;
  constructor(private musicaService: MusicaService, private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.id = this.activatedRoute.snapshot.params.id; }

     addMusica(musica: Musica) {
      this.musicaService.addPlaylist(musica, this.id)
      .subscribe(() => {this.router.navigateByUrl(`/playlist/${this.id}/musicas`); },
       () => {this.errorMsgComponent.setError('Falha ao adicionar musica'); });
    }


}
