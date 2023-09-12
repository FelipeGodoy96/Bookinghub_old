package br.com.bookinghubgodoynetworks.api.service;
import br.com.bookinghubgodoynetworks.api.dto.ClientDTO;
import br.com.bookinghubgodoynetworks.api.model.Client;
import br.com.bookinghubgodoynetworks.api.model.Role;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.ClientRepository;
import br.com.bookinghubgodoynetworks.api.repository.RoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientService {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ClientRepository repository;

    /**
     * Method to retrieve all clients.
     * @return every client from the database.
     */
    @Transactional(readOnly = true)
    public List<ClientDTO> findAllClients() {
        List<Client> list = repository.findAll();
        return list.stream().map(client -> new ModelMapper().map(client, ClientDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a client by its ID.
     * @param id of the searched client.
     * @return a client.
     */
    @Transactional(readOnly = true)
    public Optional<ClientDTO> findClientById(Long id) {
        // Obtaining Client Optional by its ID.
        Optional<Client> client = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (client.isEmpty()) {
            throw new ResourceNotFoundException("Client ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        ClientDTO dto = new ModelMapper().map(client.get(), ClientDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }


    /**
     * Method that adds a client to the database
     * @param clientDto to be added
     * @return the added client
     */
    public ClientDTO addClient (ClientDTO clientDto) {
        Client client = new ModelMapper().map(clientDto, Client.class);
        Optional<Role> defaultRole = roleRepository.findByRole("USER");
        client.setRoles(Collections.singleton(defaultRole.get()));
        repository.save(client);
        return new ClientDTO(client);
    }

    /**
     * Deletes a client from the databases
     * @param id from the client to be deleted
     */
    public void removeClient (Long id) {
        if (findClientById(id).isEmpty()) {
            throw new ResourceNotFoundException("Client ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a client on the database
     * @param id of the client to be updated
     * @param clientDto to be updated
     * @return client after being updated on the database
     */
    public ClientDTO updateClient (Long id, ClientDTO clientDto) {
        if (findClientById(id).isEmpty()) {
            throw new ResourceNotFoundException("Client ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type Client with name client
         * which receives a ModelMapper and calls map method to
         * copy ClientDTO information received on the request.
         */
        clientDto.setId(id);
        Client client = new ModelMapper().map(clientDto, Client.class);
        client = repository.save(client);
        return new ClientDTO(client);
    }
}
