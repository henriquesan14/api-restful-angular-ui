import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getListaPlaylists(): Observable<any[]> {
    const url = `${environment.apiUrl}/playlists`;
    return this.http.get<any[]>(url);
  }
}
