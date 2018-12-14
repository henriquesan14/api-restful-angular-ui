package br.com.repository;

import br.com.domain.Musica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MusicaDao extends JpaRepository<Musica, Long> {

    @Query("select m from Musica m where m.id= ?1 and m.playlist.id= ?2")
    Musica findByPlaylistMusica(Long id, Long idPlaylist);

    @Query("select m from Musica m where m.playlist.id= ?1")
    List<Musica> findAllByPlaylist(Long idPlaylist);



}
