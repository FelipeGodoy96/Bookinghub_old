package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.dto.UsuariosForm;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import br.com.APIrest.APIrest.security.usuario.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/usuarios")
public class ControllerUsuarios {

    @Autowired
    RepositoryUsuarios usuariosRepository;
    @Autowired
    UsuarioService usuarioService;

    @PostMapping
    @Transactional
    public ResponseEntity<UsuariosDto> cadastra(@RequestBody UsuariosForm usuarioForm){

        Usuarios novoUsuario = usuarioForm.toEntity();
        usuariosRepository.save(novoUsuario);

        return ResponseEntity.ok(novoUsuario.toDto());
    }
    @Transactional
    @GetMapping (value = "/{id}")
    public ResponseEntity<UsuariosDto> findUsuariosById(@PathVariable Integer id) {
        UsuariosDto dto = usuarioService.findById(id);
        return ResponseEntity.ok().body(dto);
    }
}
