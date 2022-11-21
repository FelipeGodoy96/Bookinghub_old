package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CidadeProdutosDto;
import br.com.APIrest.APIrest.model.Cidades;
import br.com.APIrest.APIrest.repository.RepositoryCidades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiseCidadeProdutos {

    @Autowired
    private RepositoryCidades repository;

    @Transactional(readOnly = true)
    public List<CidadeProdutosDto> findAll(){
        List<Cidades> list = repository.findAll();
        return list.stream().map(x -> new CidadeProdutosDto(x)).collect(Collectors.toList());
    }
}
