package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CidadeProdutosDto;
import br.com.APIrest.APIrest.service.ServiseCidadeProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/cidade_produtos")
public class ControllerCidadeProdutos {

    @Autowired
    ServiseCidadeProdutos service;

    @GetMapping
    public ResponseEntity<List<CidadeProdutosDto>> findAllCidadeProdutos() {
        List<CidadeProdutosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CidadeProdutosDto> findCidadeProdutosById(@PathVariable Integer id) {
        CidadeProdutosDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

//    @DeleteMapping(value = "/{id}")
//    public ResponseEntity<Void> deleteCidadeProdutos(@PathVariable Integer id) {
//        service.delete(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    @PostMapping
//    public ResponseEntity<CidadeProdutosDto> inserCidadeProdutos(@RequestBody CidadeProdutosDto dto) {
//        dto = service.insert(dto);
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
//        return ResponseEntity.created(uri).body(dto);
//    }
//
//    @PutMapping(value = "/{id}")
//    public ResponseEntity<CidadeProdutosDto> updateCidadeProdutos(@PathVariable Integer id, @RequestBody CidadeProdutosDto dto) {
//        dto = service.update(id, dto);
//        return ResponseEntity.ok().body(dto);
//    }
}
