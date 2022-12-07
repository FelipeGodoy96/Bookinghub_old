package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.ImagensAnuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryImagens extends JpaRepository<ImagensAnuncio, Integer> {
}
