package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.ProdutosDto_Id;
import br.com.APIrest.APIrest.dto.ReservasDto;
import br.com.APIrest.APIrest.dto.UsuariosDto_Id;
import br.com.APIrest.APIrest.model.Produtos;
import br.com.APIrest.APIrest.model.Reservas;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryProdutos;
import br.com.APIrest.APIrest.repository.RepositoryReservas;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    @Transactional(readOnly = true)
    public List<ReservasDto> BuscarReservaPorUsuario(Long usuarioId) {
        List<Reservas> entity = repository.findAllReservasByUsuariosId(usuarioId);
        List<ReservasDto> entityList = new ArrayList<>();
        for (Reservas reservas : entity) {
            entityList.add(new ReservasDto(reservas));
        }
        return entityList;
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
    public ReservasDto insert(ReservasDto dto) {
        Reservas entity = new Reservas();
        copyDtoForEntity(dto, entity);
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

    public void copyDtoForEntity(ReservasDto dto, Reservas entity) {
        entity.setH_inic_reser(dto.getH_inic_reser());
        entity.setD_inic_reser(dto.getD_inic_reser());
        entity.setD_fin_reser(dto.getD_fin_reser());
        entity.setHospede_nome(dto.getHospede_nome());
        entity.setHospede_sobrenome(dto.getHospede_sobrenome());
        entity.setHospede_email(dto.getHospede_email());
        entity.setHospede_cidade(dto.getHospede_cidade());

        UsuariosDto_Id usuariosDtoId = dto.getUsuario();
        Usuarios usuarios = repositoryUsuarios.getReferenceById(usuariosDtoId.getId());
        entity.setUsuario(usuarios);

        ProdutosDto_Id produtosDtoId = dto.getProdutos();
        Produtos produtos = repositoryProdutos.getReferenceById(produtosDtoId.getId());
        entity.setProdutos(produtos);
    }
}
