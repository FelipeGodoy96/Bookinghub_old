package br.com.lionsrest.LionsRest.controller;

import br.com.lionsrest.LionsRest.dto.CategoriasDto;
import br.com.lionsrest.LionsRest.service.ServiceCategorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/categorias")
public class ControllerCategorias {

    @Autowired
    ServiceCategorias service;

    @GetMapping
    public ResponseEntity<List<CategoriasDto>> findAllCategorias() {
        List<CategoriasDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoriasDto> findCategoriaById(@PathVariable Integer id) {
        CategoriasDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCategoria(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<CategoriasDto> inserCategoria(@RequestBody CategoriasDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CategoriasDto> updateCategoria(@PathVariable Integer id, @RequestBody CategoriasDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
