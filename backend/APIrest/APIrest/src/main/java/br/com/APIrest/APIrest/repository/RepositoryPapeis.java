package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Papeis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryPapeis extends JpaRepository<Papeis, Integer> {
}
