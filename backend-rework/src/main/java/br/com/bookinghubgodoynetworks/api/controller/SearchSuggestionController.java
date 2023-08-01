package br.com.bookinghubgodoynetworks.api.controller;

import br.com.bookinghubgodoynetworks.api.dto.SearchSuggestionDTO;
import br.com.bookinghubgodoynetworks.api.service.SearchSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/search-suggestions")
public class SearchSuggestionController {

    @Autowired
    private SearchSuggestionService service;

    @GetMapping
    public ResponseEntity<List<SearchSuggestionDTO>> getAllSuggestions() {
        List<SearchSuggestionDTO> suggestions = service.findAllSuggestions();
        return new ResponseEntity<>(suggestions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<SearchSuggestionDTO>> getSuggestionById (Long id) {
        Optional<SearchSuggestionDTO> suggestionDto = service.findSuggestionById(id);
        return new ResponseEntity<>(suggestionDto, HttpStatus.OK);
    }

    @GetMapping("/frequent")
    public ResponseEntity<List<SearchSuggestionDTO>> getLimitedSuggestion(@RequestParam(defaultValue = "20") int limit, @RequestParam(defaultValue = "0") int offset) {
        List<SearchSuggestionDTO> suggestions = service.findLimitedSuggestions(limit, offset);
        return new ResponseEntity<>(suggestions, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SearchSuggestionDTO> createSuggestion (@RequestBody SearchSuggestionDTO suggestionDto) {
        suggestionDto = service.addSuggestion(suggestionDto);
        return new ResponseEntity<>(suggestionDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroySuggestion (@PathVariable Long id) {
        service.removeSuggestion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SearchSuggestionDTO> refreshSuggestion (@PathVariable Long id, @RequestBody SearchSuggestionDTO suggestionDto) {
        suggestionDto = service.updateSuggestion(id, suggestionDto);
        return new ResponseEntity<>(suggestionDto, HttpStatus.OK);
    }
}
