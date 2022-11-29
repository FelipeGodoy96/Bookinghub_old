package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ProdutosDto;
import br.com.APIrest.APIrest.service.ServiceProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/produtos")
public class ControllerProdutos {

    @Autowired
    ServiceProdutos service;

    @GetMapping
    public ResponseEntity<List<ProdutosDto>> findAllProdutos() {
        List<ProdutosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProdutosDto> findProdutosById(@PathVariable Integer id) {
        ProdutosDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteProdutos(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<ProdutosDto> inserProdutos(@RequestBody ProdutosDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ProdutosDto> updateProdutos(@PathVariable Integer id, @RequestBody ProdutosDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
