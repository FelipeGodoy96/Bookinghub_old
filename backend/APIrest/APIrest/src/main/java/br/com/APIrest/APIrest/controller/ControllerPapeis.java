package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.PapeisDto;
import br.com.APIrest.APIrest.service.ServicePapeis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/papeis")
public class ControllerPapeis {

    @Autowired
    ServicePapeis service;

    @GetMapping
    public ResponseEntity<List<PapeisDto>> findAllPapeis() {
        List<PapeisDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PapeisDto> findPapeisById(@PathVariable Integer id) {
        PapeisDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deletePapeis(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<PapeisDto> inserPapeis(@RequestBody PapeisDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<PapeisDto> updatePapeis(@PathVariable Integer id, @RequestBody PapeisDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
