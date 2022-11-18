package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.ReservasDto;
import br.com.APIrest.APIrest.service.ServiceReservas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/reservas")
public class ControllerReservas {
    @Autowired
    ServiceReservas service;

    @GetMapping
    public ResponseEntity<List<ReservasDto>> findAllCidades() {
        List<ReservasDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
