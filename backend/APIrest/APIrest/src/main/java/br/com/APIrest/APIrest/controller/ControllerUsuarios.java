package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.service.ServiceUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/usuarios")
public class ControllerUsuarios {

    @Autowired
    ServiceUsuarios service;

    @GetMapping
    public ResponseEntity<List<UsuariosDto>> findAllUsuarios() {
        List<UsuariosDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}

