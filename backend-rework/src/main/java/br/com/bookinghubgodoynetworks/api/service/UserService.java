package br.com.bookinghubgodoynetworks.api.service;
import br.com.bookinghubgodoynetworks.api.dto.UserDTO;
import br.com.bookinghubgodoynetworks.api.model.User;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    /**
     * Method to retrieve all users.
     * @return every user from the database.
     */
    @Transactional(readOnly = true)
    public List<UserDTO> findAllUsers() {
        List<User> list = repository.findAll();
        return list.stream().map(user -> new ModelMapper().map(user,UserDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a user by its ID.
     * @param id of the searched user.
     * @return a user.
     */
    @Transactional(readOnly = true)
    public Optional<UserDTO> findUserById(Long id) {
        // Obtaining User Optional by its ID.
        Optional<User> user = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("User ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        UserDTO dto = new ModelMapper().map(user.get(), UserDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }


    /**
     * Method that adds a user to the database
     * @param userDto to be added
     * @return the added user
     */
    public UserDTO addUser (UserDTO userDto) {
        User user = new ModelMapper().map(userDto, User.class);
        repository.save(user);
        return new UserDTO(user);
    }

    /**
     * Deletes a user from the databases
     * @param id from the user to be deleted
     */
    public void removeUser (Long id) {
        if (findUserById(id).isEmpty()) {
            throw new ResourceNotFoundException("User ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a user on the database
     * @param id of the user to be updated
     * @param userDto to be updated
     * @return user after being updated on the database
     */
    public UserDTO updateUser (Long id, UserDTO userDto) {
        if (findUserById(id).isEmpty()) {
            throw new ResourceNotFoundException("User ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type User with name user
         * which receives a ModelMapper and calls map method to
         * copy UserDTO information received on the request.
         */
        userDto.setId(id);
        User user = new ModelMapper().map(userDto, User.class);
        user = repository.save(user);
        return new UserDTO(user);
    }
}
