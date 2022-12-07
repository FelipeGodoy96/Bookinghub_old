package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.IdProdutoDto;
import br.com.APIrest.APIrest.dto.ReservaDto_UsuarioProduto;
import br.com.APIrest.APIrest.dto.IdUsuarioDto;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.model.Reservas;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import br.com.APIrest.APIrest.repository.RepositoryReservas;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
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

    @Autowired
    RepositoryUsuarios repositoryUsuarios;

    @Transactional(readOnly = true)
    public List<ReservaDto_UsuarioProduto> findAll(){
        List<Reservas> list = repository.findAll();
        return list.stream().map(x -> new ReservaDto_UsuarioProduto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ReservaDto_UsuarioProduto findById (Integer id) {
        Optional<Reservas> object = repository.findById(id);
        Reservas entity = object.get();
        return new ReservaDto_UsuarioProduto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

//    @Transactional
//    public ReservasDto insert(ReservasDto dto, Integer idProduto) {
//        Reservas entity = new Reservas();
//        Produtos produtos = repositoryProdutos.getReferenceById(idProduto);
//        entity.setId(dto.getId());
//        entity.setH_inic_reser(dto.getH_inic_reser());
//        entity.setD_inic_reser(dto.getD_inic_reser());
//        entity.setD_fin_reser(dto.getD_fin_reser());
//        entity.setProdutos(produtos);
//        entity = repository.save(entity);
//        return new ReservasDto(entity);
//    }
    @Transactional
    public ReservaDto_UsuarioProduto insert(ReservaDto_UsuarioProduto dto) {
        Reservas entity = new Reservas();
        copyDtoForEntity(dto, entity);
        entity = repository.save(entity);
        return new ReservaDto_UsuarioProduto(entity);
    }

    @Transactional
    public ReservaDto_UsuarioProduto update(Integer id, ReservaDto_UsuarioProduto dto) {
        Reservas entity = repository.getReferenceById(id);
        entity.setId(dto.getId());
        entity.setH_inic_reser(dto.getH_inic_reser());
        entity.setD_inic_reser(dto.getD_inic_reser());
        entity.setD_fin_reser(dto.getD_fin_reser());
        entity = repository.save(entity);
        return new ReservaDto_UsuarioProduto(entity);
    }

    public void copyDtoForEntity(ReservaDto_UsuarioProduto reservaDtoUsuarioProduto, Reservas reservas) {
        reservas.setH_inic_reser(reservaDtoUsuarioProduto.getH_inic_reser());
        reservas.setD_inic_reser(reservaDtoUsuarioProduto.getD_inic_reser());
        reservas.setD_fin_reser(reservaDtoUsuarioProduto.getD_fin_reser());

        IdUsuarioDto idUsuarioDto = reservaDtoUsuarioProduto.getUsuario();
        Usuarios usuarios = repositoryUsuarios.getReferenceById(idUsuarioDto.getId());
        reservas.setUsuario(usuarios);

        IdProdutoDto idProdutoDto = reservaDtoUsuarioProduto.getProdutos();
        Produtos produtos = repositoryProdutos.getReferenceById(idProdutoDto.getId());
        reservas.setProdutos(produtos);
    }
}
