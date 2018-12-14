package br.com.service;

import br.com.domain.Playlist;

import java.util.List;

public interface PlaylistService {

    Playlist salvar(Playlist playlist);
    List<Playlist> recuperar();
    Playlist recuperarPorId(Long id);
    Playlist editar(Long id,Playlist playlist);
    void apagar(Long id);
    int verifica();
}
