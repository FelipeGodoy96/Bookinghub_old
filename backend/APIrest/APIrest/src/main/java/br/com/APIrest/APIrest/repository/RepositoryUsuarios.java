package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepositoryUsuarios extends JpaRepository<Usuarios, Integer> {
    Optional<Usuarios> findUsuarioByUsername(String username);
}
