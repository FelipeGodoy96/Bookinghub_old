package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ReservaDto_UsuarioProduto;
import br.com.APIrest.APIrest.service.ServiceReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/reservas")
public class ControllerReservas {
    @Autowired
    ServiceReservas service;

    @GetMapping
    public ResponseEntity<List<ReservaDto_UsuarioProduto>> findAllReservas() {
        List<ReservaDto_UsuarioProduto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ReservaDto_UsuarioProduto> findReservasById(@PathVariable Integer id) {
        ReservaDto_UsuarioProduto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteReservas(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

//    @PostMapping(value = "/produtos/{id}")
//    public ResponseEntity<ReservasDto> inserReservas(@PathVariable("id") Integer idProduto, @RequestBody ReservasDto dto) {
//        dto = service.insert(dto, idProduto);
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
//        return ResponseEntity.created(uri).body(dto);
//    }
    @PostMapping
    public ResponseEntity<ReservaDto_UsuarioProduto> inserReservas(@RequestBody ReservaDto_UsuarioProduto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<ReservaDto_UsuarioProduto> updateReservas(@PathVariable Integer id, @RequestBody ReservaDto_UsuarioProduto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}
