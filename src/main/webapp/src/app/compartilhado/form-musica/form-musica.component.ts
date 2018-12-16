import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Musica } from 'src/app/interfaces/musica';

@Component({
  selector: 'app-form-musica',
  templateUrl: './form-musica.component.html',
  styleUrls: ['./form-musica.component.css']
})
export class FormMusicaComponent implements OnInit  {

  title: string;
  @Input() musica: Musica = <Musica>{};
  @Input() idPlay: number;
  @Input() idMusica: number;
  @Output() outputMusica: EventEmitter<Musica> = new EventEmitter();

  onSubmit() {
    this.outputMusica.emit(this.musica);
  }

  ngOnInit(){
    if (this.idMusica == undefined){
      this.title = 'Nova Música';
    } else {
      this.title = 'Editar Música';
    }
  }


}
