package br.com.resource;

import br.com.domain.Usuario;
import br.com.service.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuarios")
@CrossOrigin("*")
public class UsuarioRest {

    @Autowired
    private UsuarioServiceImpl usuarioService;

    @GetMapping
    public List<Usuario> listar(){
        return usuarioService.listar();
    }

    @PostMapping
    public Usuario salvar(Usuario usuario){
        return usuarioService.salvar(usuario);
    }
}
