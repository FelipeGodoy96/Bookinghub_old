package br.com.lionsrest.LionsRest.repository;

import br.com.lionsrest.LionsRest.model.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryCategorias extends JpaRepository<Categorias, Integer> {
}
