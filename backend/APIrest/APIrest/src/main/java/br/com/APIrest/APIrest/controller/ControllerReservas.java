package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ReservasDto;
import br.com.APIrest.APIrest.service.ServiceReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/reservas")
public class ControllerReservas {
    @Autowired
    ServiceReservas service;

    @GetMapping
    public ResponseEntity<List<ReservasDto>> findAllReservas() {
        List<ReservasDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ReservasDto> findReservasById(@PathVariable Integer id) {
        ReservasDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteReservas(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<ReservasDto> inserReservas(@RequestBody ReservasDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ReservasDto> updateReservas(@PathVariable Integer id, @RequestBody ReservasDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
