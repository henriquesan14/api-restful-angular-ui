import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Musica } from 'src/app/interfaces/musica';

@Component({
  selector: 'app-form-musica',
  templateUrl: './form-musica.component.html',
  styleUrls: ['./form-musica.component.css']
})
export class FormMusicaComponent  {

  title: string;
  @Input() musica: Musica = <Musica>{};
  @Input() idPlay: number;
  @Output() outputMusica: EventEmitter<Musica> = new EventEmitter();

  onSubmit() {
    this.outputMusica.emit(this.musica);
  }



}
