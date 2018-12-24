package br.com.repository;

import br.com.domain.Playlist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaylistDao extends JpaRepository<Playlist, Long> {

    @Query("select p from Playlist p where p.id=?1")
    public Playlist buscarPorId(Long id);

    @Query(value = "select count(p) from Playlist p", nativeQuery = true)
    public int verifica();

    Page<Playlist> findAllByNomeContainingIgnoreCaseOrderByNomeAsc(Pageable pageable, String nome);
}
