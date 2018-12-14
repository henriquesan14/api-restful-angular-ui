package br.com.resource;

import br.com.domain.Musica;
import br.com.service.MusicaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("playlists/{idPlaylist}/musicas")
@CrossOrigin("*")
public class MusicaRest {

    @Autowired
    private MusicaServiceImpl service;

    @GetMapping
    public List<Musica> listar(@PathVariable Long idPlaylist) {
        return service.findAllByPlaylist(idPlaylist);
    }

    @GetMapping("/{id}")
    public Musica buscarPorId(@PathVariable Long id,@PathVariable Long idPlaylist){
        return service.recuperarPorPlaylistMusica(id,idPlaylist);
    }



    @DeleteMapping("{id}")
    public void apagar(@PathVariable Long id){
        service.apagar(id);
    }

    @PostMapping
    public Musica salvar(@PathVariable Long idPlaylist, @Valid @RequestBody Musica musica) {
        return service.salvar(idPlaylist,musica);
    }

    @PutMapping("{id}")
    public Musica editar(@PathVariable Long idPlaylist,@PathVariable Long id,@Valid @RequestBody Musica musica){
        service.editar(idPlaylist,id, musica);
        return musica;
    }




}