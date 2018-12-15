import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPlaylistsComponent } from './listagem-playlists/listagem-playlists.component';
import { FormPlaylistComponent } from './compartilhado/form-playlist/form-playlist.component';
import { CadastroPlaylistsComponent } from './cadastro-playlists/cadastro-playlists.component';
import { EdicaoPlaylistsComponent } from './edicao-playlists/edicao-playlists.component';
import { ListagemMusicasComponent } from './listagem-musicas/listagem-musicas.component';
import { CadastroMusicasComponent } from './cadastro-musicas/cadastro-musicas.component';
import { EdicaoMusicasComponent } from './edicao-musicas/edicao-musicas.component';

const routes: Routes = [
  {path: '', component: ListagemPlaylistsComponent},
  {path: 'playlist/cadastro', component: CadastroPlaylistsComponent},
  {path: 'playlist/editar/:id', component: EdicaoPlaylistsComponent},
  {path: 'playlist/:id/musicas', component: ListagemMusicasComponent},
  {path: 'playlist/:id/musicas/cadastro', component: CadastroMusicasComponent},
  {path: 'playlist/:id/musicas/editar/:idMusica', component: EdicaoMusicasComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
