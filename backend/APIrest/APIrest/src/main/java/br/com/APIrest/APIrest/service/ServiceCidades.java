package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CidadesDto;
import br.com.APIrest.APIrest.dto.ProdutosDto;
import br.com.APIrest.APIrest.model.Cidades;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.repository.RepositoryCidades;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceCidades {

    @Autowired
    private RepositoryCidades repository;

    @Autowired
    private RepositoryProdutos repositoryProdutos;

    @Transactional(readOnly = true)
    public List<CidadesDto> findAll(){
        List<Cidades> list = repository.findAll();
        return list.stream().map(x -> new CidadesDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CidadesDto findById (Integer id) {
        Optional<Cidades> object = repository.findById(id);
        Cidades entity = object.get();
        return new CidadesDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public CidadesDto insert(CidadesDto dto) {
        Cidades entity = new Cidades();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new CidadesDto(entity);
    }

    @Transactional
    public CidadesDto update(Integer id, CidadesDto dto) {
        Cidades entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new CidadesDto(entity);
    }

    private void copyDtoForEntity(CidadesDto dto, Cidades entity) {
        entity.setNome(dto.getNome());
        entity.setPais(dto.getPais());

        entity.getProdutos().clear();
        for (ProdutosDto produtosDto : dto.getProdutos()) {
            Produtos produtos = repositoryProdutos.getReferenceById(produtosDto.getId());
            entity.getProdutos().add(produtos);
        }
    }
}
