package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.dto.CidadeProdutosDto;
import br.com.APIrest.APIrest.dto.PapeisDto;
import br.com.APIrest.APIrest.service.ServicePapeis;
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
@RequestMapping(value = "/papeis")
public class ControllerPapeis {

    @Autowired
    ServicePapeis service;

    @GetMapping
    public ResponseEntity<List<PapeisDto>> findAllPapeis() {
        List<PapeisDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
