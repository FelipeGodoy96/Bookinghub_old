package br.com.bookinghubgodoynetworks.api.controller;


import br.com.bookinghubgodoynetworks.api.dto.ClientDTO;
import br.com.bookinghubgodoynetworks.api.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    private ClientService service;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        List<ClientDTO> clients = service.findAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ClientDTO>> getClientById (Long id) {
        Optional<ClientDTO> userDto = service.findClientById(id);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClientDTO> createClient (@RequestBody ClientDTO userDto) {
        userDto = service.addClient(userDto);
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyClient (@PathVariable Long id) {
        service.removeClient(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClientDTO> refreshClient (@PathVariable Long id, @RequestBody ClientDTO userDto) {
        userDto = service.updateClient(id, userDto);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
