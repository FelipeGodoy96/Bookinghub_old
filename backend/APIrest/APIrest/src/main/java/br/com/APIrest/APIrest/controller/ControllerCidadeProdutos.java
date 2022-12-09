package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CidadesDto_Id;
import br.com.APIrest.APIrest.service.ServiseCidadeProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/cidade_produtos")
public class ControllerCidadeProdutos {

    @Autowired
    ServiseCidadeProdutos service;

    @GetMapping
    public ResponseEntity<List<CidadesDto_Id>> findAllCidadeProdutos() {
        List<CidadesDto_Id> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CidadesDto_Id> findCidadeProdutosById(@PathVariable Integer id) {
        CidadesDto_Id dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
}
