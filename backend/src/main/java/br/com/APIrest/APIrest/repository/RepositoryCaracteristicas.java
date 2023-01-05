package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Caracteristicas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCaracteristicas extends JpaRepository<Caracteristicas, Integer> {
}
