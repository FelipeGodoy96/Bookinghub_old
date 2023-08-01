package br.com.bookinghubgodoynetworks.api.service;

import br.com.bookinghubgodoynetworks.api.dto.CategoryDTO;
import br.com.bookinghubgodoynetworks.api.model.Category;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository repository;

    /**
     * Method to retrieve all categories.
     * @return every category from the database.
     */
    @Transactional(readOnly = true)
    public List<CategoryDTO> findAllCategories() {
        List<Category> list = repository.findAll();
        return list.stream().map(category -> new ModelMapper().map(category,CategoryDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a category by its ID.
     * @param id of the searched category.
     * @return a category.
     */
    @Transactional(readOnly = true)
    public Optional<CategoryDTO> findCategoryById(Long id) {
        // Obtaining Category Optional by its ID.
        Optional<Category> category = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (category.isEmpty()) {
            throw new ResourceNotFoundException("Category ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        CategoryDTO dto = new ModelMapper().map(category.get(), CategoryDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }


    /**
     * Method that adds a category to the database
     * @param categoryDto to be added
     * @return the added category
     */
    public CategoryDTO addCategory (CategoryDTO categoryDto) {
        Category category = new ModelMapper().map(categoryDto, Category.class);
        repository.save(category);
        return new CategoryDTO(category);
    }

    /**
     * Deletes a category from the databases
     * @param id from the category to be deleted
     */
    public void removeCategory (Long id) {
        if (findCategoryById(id).isEmpty()) {
            throw new ResourceNotFoundException("Category ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a category on the database
     * @param id of the category to be updated
     * @param categoryDto to be updated
     * @return category after being updated on the database
     */
    public CategoryDTO updateCategory (Long id, CategoryDTO categoryDto) {
        if (findCategoryById(id).isEmpty()) {
            throw new ResourceNotFoundException("Category ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type Category with name category
         * which receives a ModelMapper and calls map method to
         * copy CategoryDTO information received on the request.
         */
        categoryDto.setId(id);
        Category category = new ModelMapper().map(categoryDto, Category.class);
        category = repository.save(category);
        return new CategoryDTO(category);
    }

}
