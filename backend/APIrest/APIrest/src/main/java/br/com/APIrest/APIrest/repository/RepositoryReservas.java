package br.com.APIrest.APIrest.repository;

import br.com.APIrest.APIrest.model.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryReservas extends JpaRepository<Reservas, Integer> {

    List<Reservas> findAllReservasByUsuariosId(Long usuarioId);
}
