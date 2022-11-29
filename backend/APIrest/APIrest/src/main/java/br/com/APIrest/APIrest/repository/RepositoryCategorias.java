package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCategorias extends JpaRepository<Categorias, Integer> {
}
