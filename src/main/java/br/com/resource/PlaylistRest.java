package br.com.resource;

import br.com.domain.Playlist;
import br.com.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("playlists")
@CrossOrigin("*")
public class PlaylistRest {

    @Autowired
    private PlaylistService service;

    @GetMapping
    public Page<Playlist> listar(@RequestParam(value = "page", defaultValue = "0") int page,
                                 @RequestParam(value = "size", defaultValue = "10") int size,
                                 @RequestParam(value = "direction", defaultValue = "ASC") String direction,
                                 @RequestParam(value = "orderBy", defaultValue = "nome") String orderNy){
        return service.recuperar(page, size, direction, orderNy);
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
