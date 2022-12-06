package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryProdutos extends JpaRepository<Produtos, Integer> {

//    List<Produtos> findAllProductsByCategoryId(Integer categoriaId);
//    List<Produtos> findAllProductsByCityId(Integer cidadeId);
}
