package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CategoriaProdutosDto;
import br.com.APIrest.APIrest.service.ServiceCategoriaProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/categoria_produtos")
public class ControllerCategoriaProdutos {

    @Autowired
    ServiceCategoriaProdutos service;

    @GetMapping
    public ResponseEntity<List<CategoriaProdutosDto>> findAllCategoriasCategoriaProdutos() {
        List<CategoriaProdutosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoriaProdutosDto> findCategoriaProdutosById(@PathVariable Integer id) {
        CategoriaProdutosDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

//    @DeleteMapping(value = "/{id}")
//    public ResponseEntity<Void> deleteCategoriaProdutos(@PathVariable Integer id) {
//        service.delete(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    @PostMapping
//    public ResponseEntity<CategoriaProdutosDto> inserCategoriaProdutos(@RequestBody CategoriaProdutosDto dto) {
//        dto = service.insert(dto);
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
//        return ResponseEntity.created(uri).body(dto);
//    }
//
//    @PutMapping(value = "/{id}")
//    public ResponseEntity<CategoriaProdutosDto> updateCategoriaProdutos(@PathVariable Integer id, @RequestBody CategoriaProdutosDto dto) {
//        dto = service.update(id, dto);
//        return ResponseEntity.ok().body(dto);
//    }
}
