package br.com.service;

import br.com.domain.Musica;

import java.util.List;

public interface MusicaService {

    Musica salvar(Long idPlaylist, Musica musica);
    Musica recuperarPorPlaylistMusica(Long id,Long idPlaylist);
    List<Musica> findAllByPlaylist(Long idPlaylist);
    void apagar(Long id);
    Musica editar(Long id,Long idPlaylist, Musica musica);
}
