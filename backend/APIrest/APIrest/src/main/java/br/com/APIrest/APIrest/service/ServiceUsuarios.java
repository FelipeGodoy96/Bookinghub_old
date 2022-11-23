//package br.com.APIrest.APIrest.service;
//
//import br.com.APIrest.APIrest.dto.UsuariosDto;
//import br.com.APIrest.APIrest.model.Usuarios;
//import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//@Service
//public class ServiceUsuarios {
//
//    @Autowired
//    private RepositoryUsuarios repository;
//
//    @Transactional(readOnly = true)
//    public List<UsuariosDto> findAll(){
//        List<Usuarios> list = repository.findAll();
//        return list.stream().map(x -> new UsuariosDto(x)).collect(Collectors.toList());
//    }
//
//    @Transactional(readOnly = true)
//    public UsuariosDto findById (Integer id) {
//        Optional<Usuarios> object = repository.findById(id);
//        Usuarios entity = object.get();
//        return new UsuariosDto(entity);
//    }
//
//    public void delete(Integer id) {
//        repository.deleteById(id);
//    }
//
//    @Transactional
//    public UsuariosDto insert(UsuariosDto dto) {
//        Usuarios entity = new Usuarios();
//        entity.setId(dto.getId());
//        entity.setNome(dto.getNome());
//        entity.setSobrenome(dto.getSobrenome());
//        entity.setEmail(dto.getEmail());
//        entity.setSenha(dto.getSenha());
//        entity = repository.save(entity);
//        return new UsuariosDto(entity);
//    }
//
//    @Transactional
//    public UsuariosDto update(Integer id, UsuariosDto dto) {
//        Usuarios entity = repository.getReferenceById(id);
//        entity.setId(dto.getId());
//        entity.setNome(dto.getNome());
//        entity.setSobrenome(dto.getSobrenome());
//        entity.setEmail(dto.getEmail());
//        entity.setSenha(dto.getSenha());
//        entity = repository.save(entity);
//        return new UsuariosDto(entity);
//    }
//}
