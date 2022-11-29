package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Cidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCidades extends JpaRepository<Cidades, Integer> {
}
