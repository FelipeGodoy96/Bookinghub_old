package br.com.bookinghubgodoynetworks.api.service;

import br.com.bookinghubgodoynetworks.api.dto.SearchSuggestionDTO;
import br.com.bookinghubgodoynetworks.api.model.SearchSuggestion;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.SearchSuggestionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SearchSuggestionService {

    @Autowired
    private SearchSuggestionRepository repository;


    /**
     * Method to retrieve all suggestions.
     * @return every suggestion from the database.
     */
    @Transactional(readOnly = true)
    public List<SearchSuggestionDTO> findAllSuggestions() {
        List<SearchSuggestion> list = repository.findAll();
        return list.stream().map(suggestion -> new ModelMapper().map(suggestion,SearchSuggestionDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a suggestion by its ID.
     * @param id of the searched suggestion.
     * @return a suggestion.
     */
    @Transactional(readOnly = true)
    public Optional<SearchSuggestionDTO> findSuggestionById(Long id) {
        // Obtaining SearchSuggestion Optional by its ID.
        Optional<SearchSuggestion> suggestion = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (suggestion.isEmpty()) {
            throw new ResourceNotFoundException("Suggestion ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        SearchSuggestionDTO dto = new ModelMapper().map(suggestion.get(), SearchSuggestionDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }

    /**
     * Method that gets suggestions based in params
     * @param limit is the maximum items to return
     * @param offset is the beginning element
     * @return a limited quantity of suggestions elements
     */
    public List<SearchSuggestionDTO> findLimitedSuggestions (int limit, int offset) {
        List<SearchSuggestion> list = repository.getSuggestions(limit, offset);
        return list.stream().map(suggestion -> new ModelMapper().map(suggestion, SearchSuggestionDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that adds a suggestion to the database
     * @param suggestionDto to be added
     * @return the added suggestion
     */
    public SearchSuggestionDTO addSuggestion (SearchSuggestionDTO suggestionDto) {
        SearchSuggestion suggestion = new ModelMapper().map(suggestionDto, SearchSuggestion.class);
        repository.save(suggestion);
        return new SearchSuggestionDTO(suggestion);
    }

    /**
     * Deletes a suggestion from the databases
     * @param id from the suggestion to be deleted
     */
    public void removeSuggestion (Long id) {
        if (findSuggestionById(id).isEmpty()) {
            throw new ResourceNotFoundException("Suggestion ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a suggestion on the database
     * @param id of the suggestion to be updated
     * @param suggestionDto to be updated
     * @return suggestion after being updated on the database
     */
    public SearchSuggestionDTO updateSuggestion (Long id, SearchSuggestionDTO suggestionDto) {
        if (findSuggestionById(id).isEmpty()) {
            throw new ResourceNotFoundException("Suggestion ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type SearchSuggestion with name suggestion
         * which receives a ModelMapper and calls map method to
         * copy SearchSuggestionDTO information received on the request.
         */
        suggestionDto.setId(id);
        SearchSuggestion suggestion = new ModelMapper().map(suggestionDto, SearchSuggestion.class);
        suggestion = repository.save(suggestion);
        return new SearchSuggestionDTO(suggestion);
    }

}
