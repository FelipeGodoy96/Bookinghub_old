package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CaracteristicasDto;
import br.com.APIrest.APIrest.service.ServiceCaracteristicas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/caracteristicas")
public class ControllerCaracteristicas {

    @Autowired
    ServiceCaracteristicas service;

    @GetMapping
    public ResponseEntity<List<CaracteristicasDto>> findAllCaracteristicas() {
        List<CaracteristicasDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CaracteristicasDto> findCaracteristicasById(@PathVariable Integer id) {
        CaracteristicasDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteCaracteristicas(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<CaracteristicasDto> inserCaracteristicas(@RequestBody CaracteristicasDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CaracteristicasDto> updateCaracteristicas(@PathVariable Integer id, @RequestBody CaracteristicasDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
