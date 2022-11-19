package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ClienteDto;
import br.com.APIrest.APIrest.model.Cliente;
import br.com.APIrest.APIrest.repository.RepositoryCliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceCliente {

    @Autowired
    private RepositoryCliente repository;

    @Transactional(readOnly = true)
    public List<ClienteDto> findAll(){
        List<Cliente> list = repository.findAll();
        return list.stream().map(x -> new ClienteDto(x)).collect(Collectors.toList());
    }
}
