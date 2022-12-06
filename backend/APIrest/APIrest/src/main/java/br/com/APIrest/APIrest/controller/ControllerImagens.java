package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ImagensAnuncioDto;
import br.com.APIrest.APIrest.service.ServiceImagens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/imagens")
public class ControllerImagens {

    @Autowired
    ServiceImagens service;

    @GetMapping
    public ResponseEntity<List<ImagensAnuncioDto>> findAllImagens() {
        List<ImagensAnuncioDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ImagensAnuncioDto> findImagensById(@PathVariable Integer id) {
        ImagensAnuncioDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteImagens(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<ImagensAnuncioDto> inserImagens(@RequestBody ImagensAnuncioDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ImagensAnuncioDto> updateImegens(@PathVariable Integer id, @RequestBody ImagensAnuncioDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
