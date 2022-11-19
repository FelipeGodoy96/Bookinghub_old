package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ClienteDto;
import br.com.APIrest.APIrest.service.ServiceCliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/cliente")
public class ControllerCliente {

    @Autowired
    ServiceCliente service;

    @GetMapping
    public ResponseEntity<List<ClienteDto>> findAllCliente() {
        List<ClienteDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
