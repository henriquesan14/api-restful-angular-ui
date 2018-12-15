import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../interfaces/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getListaPlaylists(): Observable<Playlist[]> {
    const url = `${environment.apiUrl}/playlists`;
    return this.http.get<Playlist[]>(url);
  }

  getPlaylist(id: number): Observable<Playlist> {
    const url = `${environment.apiUrl}/playlists/${id}`;
    return this.http.get<Playlist>(url);
  }

  addPlaylist(playlist: Playlist): Observable<Playlist> {
    const url = `${environment.apiUrl}/playlists`;
    return this.http.post<Playlist>(url, playlist);
  }

  atualizaPlaylist(playlist: Playlist): Observable<Playlist> {
    const url = `${environment.apiUrl}/playlists/${playlist.id}`;
    return this.http.put<Playlist>(url, playlist);
  }

  deletaPlaylist(id: number): Observable<Playlist> {
    const url = `${environment.apiUrl}/playlists/${id}`;
    return this.http.delete<Playlist>(url);
  }
}
