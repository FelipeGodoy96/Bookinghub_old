package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.CaracteristicasDto;
import br.com.APIrest.APIrest.model.Caracteristicas;
import br.com.APIrest.APIrest.repository.RepositoryCaracteristicas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServiceCaracteristicas {

    @Autowired
    private RepositoryCaracteristicas repository;

    @Transactional(readOnly = true)
    public List<CaracteristicasDto> findAll() {
        List<Caracteristicas> list = repository.findAll();
        return list.stream().map(x -> new CaracteristicasDto(x)).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public CaracteristicasDto findById (Integer id) {
        Optional<Caracteristicas> object = repository.findById(id);
        Caracteristicas entity = object.get();
        return new CaracteristicasDto(entity);
    }

    public void delete(Integer id) { repository.deleteById(id); }

    @Transactional
    public CaracteristicasDto insert(CaracteristicasDto dto) {
        Caracteristicas entity = new Caracteristicas();
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setIcone(dto.getIcone());
        entity = repository.save(entity);
        return new CaracteristicasDto(entity);
    }

        @Transactional
        public CaracteristicasDto update(Integer id, CaracteristicasDto dto) {
            Caracteristicas entity = repository.getReferenceById(id);
            entity.setId(dto.getId());
            entity.setNome(dto.getNome());
            entity.setIcone(dto.getIcone());
            entity = repository.save(entity);
            return new CaracteristicasDto(entity);
        }
}
