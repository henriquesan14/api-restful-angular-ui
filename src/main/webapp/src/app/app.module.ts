import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaPlaylistsComponent } from './paginas/lista-playlists/lista-playlists.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ListagemPlaylistsComponent } from './listagem-playlists/listagem-playlists.component';
import { PlaylistService } from './services/playlist.service';
import { CadastroPlaylistComponent } from './cadastro-playlist/cadastro-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaPlaylistsComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ListagemPlaylistsComponent,
    CadastroPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
