package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProdutos extends JpaRepository<Produtos, Integer> {
}
