package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ProdutosDto;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceProdutos {

    @Autowired
    private RepositoryProdutos repository;

    @Transactional(readOnly = true)
    public List<ProdutosDto> findAll(){
        List<Produtos> list = repository.findAll();
        return list.stream().map(x -> new ProdutosDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProdutosDto findById (Integer id) {
        Optional<Produtos> object = repository.findById(id);
        Produtos entity = object.get();
        return new ProdutosDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ProdutosDto insert(ProdutosDto dto) {
        Produtos entity = new Produtos();
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }

    @Transactional
    public ProdutosDto update(Integer id, ProdutosDto dto) {
        Produtos entity = repository.getReferenceById(id);
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }
}
