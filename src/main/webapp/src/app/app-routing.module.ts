import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPlaylistsComponent } from './listagem-playlists/listagem-playlists.component';
import { CadastroPlaylistComponent } from './cadastro-playlist/cadastro-playlist.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroPlaylistComponent},
  {path: '**', component: ListagemPlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
