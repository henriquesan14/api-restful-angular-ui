package br.com.service;

import br.com.domain.Musica;
import br.com.repository.MusicaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MusicaServiceImpl implements MusicaService {

    @Autowired
    private MusicaDao musicaDao;

    @Autowired
    private PlaylistServiceImpl playlistService;

    public Musica salvar(Long idPlaylist,Musica musica){
        musica.setPlaylist(playlistService.recuperarPorId(idPlaylist));
        return musicaDao.save(musica);
    }



    @Transactional(readOnly = true)
    public Musica recuperarPorPlaylistMusica(Long id,Long idPlaylist){
        return musicaDao.findByPlaylistMusica(id,idPlaylist);
    }

    @Transactional(readOnly = true)
    public List<Musica> findAllByPlaylist(Long idPlaylist){
        return musicaDao.findAllByPlaylist(idPlaylist);
    }



    public void apagar(Long id){
        musicaDao.deleteById(id);
    }

    public Musica editar(Long idPlaylist,Long id,Musica musica){
        musica.setId(id);
        musica.setPlaylist(recuperarPorPlaylistMusica(id,idPlaylist).getPlaylist());
        musicaDao.save(musica);
        return musica;
    }
}
