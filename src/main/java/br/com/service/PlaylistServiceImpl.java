package br.com.service;

import br.com.domain.Playlist;
import br.com.repository.PlaylistDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlaylistServiceImpl implements PlaylistService {

    @Autowired
    private PlaylistDao dao;

    public Playlist salvar(Playlist playlist){
        playlist=dao.save(playlist);
        if(playlist.getMusicas() != null){
            playlist.getMusicas()
                    .parallelStream()
                    .forEach(playlist::addMusica);
        }
        return playlist;
    }

    @Transactional(readOnly = true)
    public List<Playlist> recuperar(){
        return dao.findAll();
    }

    @Transactional(readOnly = true)
    public Playlist recuperarPorId(Long id){
        return dao.buscarPorId(id);
    }

    public Playlist editar(Long id,Playlist playlist){
        playlist.setId(id);
        dao.save(playlist);
        return playlist;
    }

    public void apagar(Long id){
        dao.deleteById(id);
    }

    @Override
    public int verifica(){
       return dao.verifica();
    }




}
