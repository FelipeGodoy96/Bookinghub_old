package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CaracteristicasDto;
import br.com.APIrest.APIrest.dto.ImagensDto;
import br.com.APIrest.APIrest.dto.ProdutosDto;
import br.com.APIrest.APIrest.dto.ReservaProdutosDto;
import br.com.APIrest.APIrest.model.Caracteristicas;
import br.com.APIrest.APIrest.model.Imagens;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.model.Reservas;
import br.com.APIrest.APIrest.repository.RepositoryCaracteristicas;
import br.com.APIrest.APIrest.repository.RepositoryImagens;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import br.com.APIrest.APIrest.repository.RepositoryReservas;
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
    @Autowired
    private RepositoryCaracteristicas repositoryCaracteristicas;

    @Autowired
    RepositoryReservas repositoryReservas;

    @Autowired
    RepositoryImagens repositoryImagens;

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
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }

    @Transactional
    public ProdutosDto update(Integer id, ProdutosDto dto) {
        Produtos entity = repository.getReferenceById(id);
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ProdutosDto(entity);
    }

    private void copyDtoForEntity(ProdutosDto dto, Produtos entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());

        entity.getCaracteristica().clear();
        for (CaracteristicasDto caracteristicasDto : dto.getCaracteristica()) {
            Caracteristicas caracteristicas = repositoryCaracteristicas.getReferenceById(caracteristicasDto.getId());
            entity.getCaracteristica().add(caracteristicas);
        }
        entity.getImagens().clear();
        for(ImagensDto imagensDto : dto.getImagens()) {
             Imagens imagens = repositoryImagens.getReferenceById(imagensDto.getId());
             entity.getImagens().add(imagens);
            }
        entity.getReserva().clear();
        for (ReservaProdutosDto reservaProdutosDto : dto.getReserva()) {
            Reservas reservas = repositoryReservas.getReferenceById(reservaProdutosDto.getId());
            entity.getReserva().add(reservas);
        }

    }
}
