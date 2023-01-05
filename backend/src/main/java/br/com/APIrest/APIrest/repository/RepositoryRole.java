package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.security.EPermits;
import br.com.APIrest.APIrest.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryRole extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(EPermits name);
}
