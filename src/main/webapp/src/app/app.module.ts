import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ListagemPlaylistsComponent } from './listagem-playlists/listagem-playlists.component';
import { PlaylistService } from './services/playlist.service';
import { FormPlaylistComponent } from './compartilhado/form-playlist/form-playlist.component';
import { CadastroPlaylistsComponent } from './cadastro-playlists/cadastro-playlists.component';
import { EdicaoPlaylistsComponent } from './edicao-playlists/edicao-playlists.component';
import { MusicaService } from './services/musica.service';
import { ListagemMusicasComponent } from './listagem-musicas/listagem-musicas.component';
import { FormMusicaComponent } from './compartilhado/form-musica/form-musica.component';
import { CadastroMusicasComponent } from './cadastro-musicas/cadastro-musicas.component';
import { EdicaoMusicasComponent } from './edicao-musicas/edicao-musicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ListagemPlaylistsComponent,
    FormPlaylistComponent,
    CadastroPlaylistsComponent,
    EdicaoPlaylistsComponent,
    ListagemMusicasComponent,
    FormMusicaComponent,
    CadastroMusicasComponent,
    EdicaoMusicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlaylistService, MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
