package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CategoriaProdutosDto;
import br.com.APIrest.APIrest.model.Categorias;
import br.com.APIrest.APIrest.repository.RepositoryCategorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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
}
