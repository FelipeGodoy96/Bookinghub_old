package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryUsuarios extends JpaRepository<Usuarios, Long> {
    Optional<Usuarios> findByUsername(String username);
    Boolean existsByUsername(String username);
}
