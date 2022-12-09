package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CidadesDto_Id;
import br.com.APIrest.APIrest.model.Cidades;
import br.com.APIrest.APIrest.repository.RepositoryCidades;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiseCidadeProdutos {

    @Autowired
    private RepositoryCidades repository;

    @Transactional(readOnly = true)
    public List<CidadesDto_Id> findAll(){
        List<Cidades> list = repository.findAll();
        return list.stream().map(x -> new CidadesDto_Id(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CidadesDto_Id findById (Integer id) {
        Optional<Cidades> object = repository.findById(id);
        Cidades entity = object.get();
        return new CidadesDto_Id(entity);
    }
}
