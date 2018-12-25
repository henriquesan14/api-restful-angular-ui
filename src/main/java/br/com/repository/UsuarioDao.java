package br.com.repository;

import br.com.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioDao extends JpaRepository<Usuario, String> {

    Usuario findByLogin(String login);
}
