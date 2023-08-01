package br.com.bookinghubgodoynetworks.api.controller;


import br.com.bookinghubgodoynetworks.api.dto.HousingDTO;
import br.com.bookinghubgodoynetworks.api.service.HousingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/housing")
public class HousingController {

    @Autowired
    private HousingService service;

    @GetMapping
    public ResponseEntity<List<HousingDTO>> getAllHousings() {
        List<HousingDTO> housings = service.findAllHousings();
        return new ResponseEntity<>(housings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<HousingDTO>> getHousingById (Long id) {
        Optional<HousingDTO> housingDto = service.findHousingById(id);
        return new ResponseEntity<>(housingDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<HousingDTO> createHousing (@RequestBody HousingDTO housingDto) {
        housingDto = service.addHousing(housingDto);
        return new ResponseEntity<>(housingDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyHousing (@PathVariable Long id) {
        service.removeHousing(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HousingDTO> refreshHousing (@PathVariable Long id, @RequestBody HousingDTO housingDto) {
        housingDto = service.updateHousing(id, housingDto);
        return new ResponseEntity<>(housingDto, HttpStatus.OK);
    }


}
