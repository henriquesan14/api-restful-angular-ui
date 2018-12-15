import { Playlist } from './playlist';

export interface Musica {

    id: number;
    titulo: string;
    banda: string;
    nota: number;
    playlist: Playlist;
}
