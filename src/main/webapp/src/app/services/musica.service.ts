import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Musica } from '../interfaces/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private http: HttpClient) { }

  getMusicas(id: number): Observable<Musica[]> {
    const url = `${environment.apiUrl}/playlists/${id}/musicas`;
    return this.http.get<Musica[]>(url);
  }

  getMusica(id: number, idMusica: number): Observable<Musica> {
    const url = `${environment.apiUrl}/playlists/${id}/musicas/${idMusica}`;
    return this.http.get<Musica>(url);
  }

  addPlaylist(musica: Musica, id: number): Observable<Musica> {
    const url = `${environment.apiUrl}/playlists/${id}/musicas`;
    return this.http.post<Musica>(url, musica);
  }

  atualizaPlaylist(musica: Musica, id: number, idMusica: number): Observable<Musica> {
    const url = `${environment.apiUrl}/playlists/${id}/musicas/${idMusica}`;
    return this.http.put<Musica>(url, musica);
  }

  deletaPlaylist(id: number, idMusica: number): Observable<Musica> {
    const url = `${environment.apiUrl}/playlists/${id}/musicas/${idMusica}`;
    return this.http.delete<Musica>(url);
  }
}
