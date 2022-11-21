package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CidadeProdutosDto;
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
    public List<CidadeProdutosDto> findAll(){
        List<Cidades> list = repository.findAll();
        return list.stream().map(x -> new CidadeProdutosDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CidadeProdutosDto findById (Integer id) {
        Optional<Cidades> object = repository.findById(id);
        Cidades entity = object.get();
        return new CidadeProdutosDto(entity);
    }

//    public void delete(Integer id) {
//        repository.deleteById(id);
//    }
//
//    @Transactional
//    public CidadeProdutosDto insert(CidadeProdutosDto dto) {
//        Cidades entity = new Cidades();
//        entity.setId(dto.getId());
//        entity.setNome(dto.getNome());
//        entity.setPais(dto.getPais());
//        entity = repository.save(entity);
//        return new CidadeProdutosDto(entity);
//    }
//
//    @Transactional
//    public CidadeProdutosDto update(Integer id, CidadeProdutosDto dto) {
//        Cidades entity = repository.getReferenceById(id);
//        entity.setId(dto.getId());
//        entity.setNome(dto.getNome());
//        entity.setPais(dto.getPais());
//        entity = repository.save(entity);
//        return new CidadeProdutosDto(entity);
//    }
}
