package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceUsuarios {

    @Autowired
    private RepositoryUsuarios repository;

    @Transactional(readOnly = true)
    public List<UsuariosDto> findAll(){
        List<Usuarios> list = repository.findAll();
        return list.stream().map(x -> new UsuariosDto(x)).collect(Collectors.toList());
    }
}
