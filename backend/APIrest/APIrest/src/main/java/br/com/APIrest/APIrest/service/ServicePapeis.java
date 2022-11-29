package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.PapeisDto;
import br.com.APIrest.APIrest.model.Papeis;
import br.com.APIrest.APIrest.repository.RepositoryPapeis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ServicePapeis {

    @Autowired
    private RepositoryPapeis repository;

    @Transactional(readOnly = true)
    public List<PapeisDto> findAll(){
        List<Papeis> list = repository.findAll();
        return list.stream().map(x -> new PapeisDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PapeisDto findById (Integer id) {
        Optional<Papeis> object = repository.findById(id);
        Papeis entity = object.get();
        return new PapeisDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public PapeisDto insert(PapeisDto dto) {
        Papeis entity = new Papeis();
        entity.setId(dto.getId());
        entity.setAuthority(dto.getAuthority());
        entity = repository.save(entity);
        return new PapeisDto(entity);
    }

    @Transactional
    public PapeisDto update(Integer id, PapeisDto dto) {
        Papeis entity = repository.getReferenceById(id);
        entity.setId(dto.getId());
        entity.setAuthority(dto.getAuthority());
        entity = repository.save(entity);
        return new PapeisDto(entity);
    }
}
