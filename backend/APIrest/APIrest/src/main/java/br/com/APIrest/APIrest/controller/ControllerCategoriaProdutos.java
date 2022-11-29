package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CategoriaProdutosDto;
import br.com.APIrest.APIrest.service.ServiceCategoriaProdutos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/categoria_produtos")
public class ControllerCategoriaProdutos {

    @Autowired
    ServiceCategoriaProdutos service;

    @GetMapping
    public ResponseEntity<List<CategoriaProdutosDto>> findAllCategorias() {
        List<CategoriaProdutosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
