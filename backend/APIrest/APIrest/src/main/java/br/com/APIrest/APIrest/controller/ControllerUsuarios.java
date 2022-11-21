package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.service.ServiceUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/usuarios")
public class ControllerUsuarios {

    @Autowired
    ServiceUsuarios service;

    @GetMapping
    public ResponseEntity<List<UsuariosDto>> findAllUsuarios() {
        List<UsuariosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuariosDto> findUsuariosById(@PathVariable Integer id) {
        UsuariosDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteUsuarios(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<UsuariosDto> inserUsuarios(@RequestBody UsuariosDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<UsuariosDto> updateUsuarios(@PathVariable Integer id, @RequestBody UsuariosDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}

