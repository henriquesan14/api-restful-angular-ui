package br.com.service;

import br.com.domain.Playlist;
import org.springframework.data.domain.Page;


public interface PlaylistService {

    Playlist salvar(Playlist playlist);
    Page<Playlist> recuperar(int page, int size, String nome);
    Playlist recuperarPorId(Long id);
    Playlist editar(Long id,Playlist playlist);
    void apagar(Long id);
    int verifica();
}
