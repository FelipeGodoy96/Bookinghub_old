package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCliente extends JpaRepository<Cliente, Integer> {
}
