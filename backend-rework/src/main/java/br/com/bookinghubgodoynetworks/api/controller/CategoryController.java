package br.com.bookinghubgodoynetworks.api.controller;

import br.com.bookinghubgodoynetworks.api.dto.CategoryDTO;
import br.com.bookinghubgodoynetworks.api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        List<CategoryDTO> categories = service.findAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<CategoryDTO>> getCategoryById (Long id) {
        Optional<CategoryDTO> categoryDto = service.findCategoryById(id);
        return new ResponseEntity<>(categoryDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> createCategory (@RequestBody CategoryDTO categoryDto) {
        categoryDto = service.addCategory(categoryDto);
        return new ResponseEntity<>(categoryDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyCategory (@PathVariable Long id) {
        service.removeCategory(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryDTO> refreshCategory (@PathVariable Long id, @RequestBody CategoryDTO categoryDto) {
        categoryDto = service.updateCategory(id, categoryDto);
        return new ResponseEntity<>(categoryDto, HttpStatus.OK);
    }
}
