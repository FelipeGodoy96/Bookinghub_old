package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CategoriaProdutosDto;
import br.com.APIrest.APIrest.model.Categorias;
import br.com.APIrest.APIrest.repository.RepositoryCategorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceCategoriaProdutos {

    @Autowired
    private RepositoryCategorias repository;

    @Transactional(readOnly = true)
    public List<CategoriaProdutosDto> findAll(){
        List<Categorias> list = repository.findAll();
        return list.stream().map(x -> new CategoriaProdutosDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CategoriaProdutosDto findById (Integer id) {
        Optional<Categorias> object = repository.findById(id);
        Categorias entity = object.get();
        return new CategoriaProdutosDto(entity);
    }

//    public void delete(Integer id) {
//        repository.deleteById(id);
//    }
//
//    @Transactional
//    public CategoriaProdutosDto insert(CategoriaProdutosDto dto) {
//        Categorias entity = new Categorias();
//        entity.setId(dto.getId());
//        entity.setQualificacao(dto.getQualificacao());
//        entity.setDescricao(dto.getDescricao());
//        entity.setImagem(dto.getImagem());
//        entity = repository.save(entity);
//        return new CategoriaProdutosDto(entity);
//    }
//
//    @Transactional
//    public CategoriaProdutosDto update(Integer id, CategoriaProdutosDto dto) {
//        Categorias entity = repository.getReferenceById(id);
//        entity.setId(dto.getId());
//        entity.setQualificacao(dto.getQualificacao());
//        entity.setDescricao(dto.getDescricao());
//        entity.setImagem(dto.getImagem());
//        entity = repository.save(entity);
//        return new CategoriaProdutosDto(entity);
//    }
}
