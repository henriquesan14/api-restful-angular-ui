import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Playlist } from '../interfaces/playlist';
import { Page } from '../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getListaPlaylists(page: number, size: number): Observable<Page> {
    const url = `${environment.apiUrl}/playlists?page=${page}&size=${size}`;
    return this.http.get<Page>(url);
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
