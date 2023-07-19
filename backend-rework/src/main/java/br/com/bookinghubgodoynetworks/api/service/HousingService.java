package br.com.bookinghubgodoynetworks.api.service;

import br.com.bookinghubgodoynetworks.api.dto.HousingDTO;
import br.com.bookinghubgodoynetworks.api.model.Housing;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.HousingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HousingService {

    @Autowired
    HousingRepository repository;

    /**
     * Method to retrieve all housings.
     * @return every housing from the database.
     */
    @Transactional(readOnly = true)
    public List<HousingDTO> findAllHousings() {
        List<Housing> list = repository.findAll();
        return list.stream().map(housing -> new ModelMapper().map(housing,HousingDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a housing by its ID.
     * @param id of the searched housing.
     * @return a housing.
     */
    @Transactional(readOnly = true)
    public Optional<HousingDTO> findHousingById(Long id) {
        // Obtaining Housing Optional by its ID.
        Optional<Housing> housing = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (housing.isEmpty()) {
            throw new ResourceNotFoundException("Housing ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        HousingDTO dto = new ModelMapper().map(housing.get(), HousingDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }


    /**
     * Method that adds a housing to the database
     * @param housingDto to be added
     * @return the added housing
     */
    public HousingDTO addHousing (HousingDTO housingDto) {
        Housing housing = new ModelMapper().map(housingDto, Housing.class);
        repository.save(housing);
        return new HousingDTO(housing);
    }

    /**
     * Deletes a housing from the databases
     * @param id from the housing to be deleted
     */
    public void removeHousing (Long id) {
        if (findHousingById(id).isEmpty()) {
            throw new ResourceNotFoundException("Housing ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a housing on the database
     * @param id of the housing to be updated
     * @param housingDto to be updated
     * @return housing after being updated on the database
     */
    public HousingDTO updateHousing (Long id, HousingDTO housingDto) {
        if (findHousingById(id).isEmpty()) {
            throw new ResourceNotFoundException("Housing ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type Housing with name housing
         * which receives a ModelMapper and calls map method to
         * copy HousingDTO information received on the request.
         */
        housingDto.setId(id);
        Housing housing = new ModelMapper().map(housingDto, Housing.class);
        housing = repository.save(housing);
        return new HousingDTO(housing);
    }
}
