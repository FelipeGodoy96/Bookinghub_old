package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ReservasDto;
import br.com.APIrest.APIrest.model.Reservas;
import br.com.APIrest.APIrest.repository.RepositoryReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceReservas {

    @Autowired
    private RepositoryReservas repository;

    @Transactional(readOnly = true)
    public List<ReservasDto> findAll(){
        List<Reservas> list = repository.findAll();
        return list.stream().map(x -> new ReservasDto(x)).collect(Collectors.toList());
    }
}
