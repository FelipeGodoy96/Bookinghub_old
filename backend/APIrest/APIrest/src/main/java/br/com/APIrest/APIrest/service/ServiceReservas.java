package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ReservasDto;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.model.Reservas;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import br.com.APIrest.APIrest.repository.RepositoryReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceReservas {

    @Autowired
    private RepositoryReservas repository;

    @Autowired
    private RepositoryProdutos repositoryProdutos;

    @Transactional(readOnly = true)
    public List<ReservasDto> findAll(){
        List<Reservas> list = repository.findAll();
        return list.stream().map(x -> new ReservasDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ReservasDto findById (Integer id) {
        Optional<Reservas> object = repository.findById(id);
        Reservas entity = object.get();
        return new ReservasDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public ReservasDto insert(ReservasDto dto, Integer idProduto) {
        Reservas entity = new Reservas();
        Produtos produtos = repositoryProdutos.getReferenceById(idProduto);
        entity.setId(dto.getId());
        entity.setH_inic_reser(dto.getH_inic_reser());
        entity.setD_inic_reser(dto.getD_inic_reser());
        entity.setD_fin_reser(dto.getD_fin_reser());
        entity.setProdutos(produtos);
        entity = repository.save(entity);
        return new ReservasDto(entity);
    }

    @Transactional
    public ReservasDto update(Integer id, ReservasDto dto) {
        Reservas entity = repository.getReferenceById(id);
        entity.setId(dto.getId());
        entity.setH_inic_reser(dto.getH_inic_reser());
        entity.setD_inic_reser(dto.getD_inic_reser());
        entity.setD_fin_reser(dto.getD_fin_reser());
        entity = repository.save(entity);
        return new ReservasDto(entity);
    }
}
