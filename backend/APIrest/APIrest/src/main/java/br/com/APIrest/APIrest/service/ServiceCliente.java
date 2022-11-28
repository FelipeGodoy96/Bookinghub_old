package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ClienteDto;
import br.com.APIrest.APIrest.model.Cliente;
import br.com.APIrest.APIrest.repository.RepositoryCliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
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

    @Transactional(readOnly = true)
    public ClienteDto findById (Integer id) {
        Optional<Cliente> object = repository.findById(id);
        Cliente entity = object.get();
        return new ClienteDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ClienteDto insert(ClienteDto dto) {
        Cliente entity = new Cliente();
        entity.setId(dto.getId());
        entity = repository.save(entity);
        return new ClienteDto(entity);
    }

    @Transactional
    public ClienteDto update(Integer id, ClienteDto dto) {
        Cliente entity = repository.getReferenceById(id);
        entity.setId(dto.getId());
        entity = repository.save(entity);
        return new ClienteDto(entity);
    }
}
