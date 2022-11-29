package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CidadeProdutosDto;
import br.com.APIrest.APIrest.service.ServiseCidadeProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/cidade_produtos")
public class ControllerCidadeProdutos {

    @Autowired
    ServiseCidadeProdutos service;

    @GetMapping
    public ResponseEntity<List<CidadeProdutosDto>> findAllCidades() {
        List<CidadeProdutosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
