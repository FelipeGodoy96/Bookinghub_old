package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ImagensDto;
import br.com.APIrest.APIrest.service.ServiceImagens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/imagens")
public class ControllerImagens {

    @Autowired
    ServiceImagens service;

    @GetMapping
    public ResponseEntity<List<ImagensDto>> findAllImagens() {
        List<ImagensDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ImagensDto> findImagensById(@PathVariable Integer id) {
        ImagensDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteImagens(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<ImagensDto> inserImagens(@RequestBody ImagensDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ImagensDto> updateImegens(@PathVariable Integer id, @RequestBody ImagensDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
