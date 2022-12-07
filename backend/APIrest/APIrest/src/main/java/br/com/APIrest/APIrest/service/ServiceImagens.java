package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ImagensAnuncioDto;
import br.com.APIrest.APIrest.dto.ProdutoImagensDto;
import br.com.APIrest.APIrest.model.ImagensAnuncio;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.repository.RepositoryImagens;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceImagens {

    @Autowired
    private RepositoryImagens repository;

    @Autowired
    private RepositoryProdutos repositoryProdutos;

    @Transactional(readOnly = true)
    public List<ImagensAnuncioDto> findAll(){
        List<ImagensAnuncio> list = repository.findAll();
        return list.stream().map(x -> new ImagensAnuncioDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ImagensAnuncioDto findById (Integer id) {
        Optional<ImagensAnuncio> object = repository.findById(id);
        ImagensAnuncio entity = object.get();
        return new ImagensAnuncioDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ImagensAnuncioDto insert(ImagensAnuncioDto dto) {
        ImagensAnuncio entity = new ImagensAnuncio();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ImagensAnuncioDto(entity);
    }

    @Transactional
    public ImagensAnuncioDto update(Integer id, ImagensAnuncioDto dto) {
        ImagensAnuncio entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ImagensAnuncioDto(entity);
    }

    private void copyDtoForEntity(ImagensAnuncioDto imagensAnuncioDto, ImagensAnuncio imagensAnuncio) {
        imagensAnuncio.setTitulo(imagensAnuncioDto.getTitulo());
        imagensAnuncio.setUrl(imagensAnuncioDto.getUrl());

        ProdutoImagensDto produtoImagensDto = imagensAnuncioDto.getProduto();
        Produtos produtos = repositoryProdutos.getReferenceById(produtoImagensDto.getId());
        imagensAnuncio.setProdutos(produtos);
    }
}
