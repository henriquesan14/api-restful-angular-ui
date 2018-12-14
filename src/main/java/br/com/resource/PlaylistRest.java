package br.com.resource;

import br.com.domain.Playlist;
import br.com.service.PlaylistService;
import br.com.service.PlaylistServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("playlists")
@CrossOrigin("*")
public class PlaylistRest {

    @Autowired
    private PlaylistService service;

    @GetMapping
    public List<Playlist> listar(){
        return service.recuperar();
    }

    @PostMapping
    public Playlist criar(@Valid @RequestBody Playlist playlist){
        return service.salvar(playlist);
    }

    @GetMapping("/{id}")
    public Playlist recupeperarPorId(@PathVariable Long id){
        return service.recuperarPorId(id);
    }

    @PutMapping("{id}")
    public Playlist editar(@PathVariable Long id,@RequestBody Playlist playlist) {
        service.editar(id,playlist);
        return playlist;
    }

    @DeleteMapping("{id}")
    public void apagar(@PathVariable Long id){
        service.apagar(id);
    }

    public int verifica(){
        return service.verifica();
    }
    
    
    public static void main(String[] args) {
    	
    	PlaylistRest res= new PlaylistRest();
    	res.verifica();
		
		
	}



}
