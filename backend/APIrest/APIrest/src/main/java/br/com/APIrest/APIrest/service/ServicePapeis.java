package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.dto.PapeisDto;
import br.com.APIrest.APIrest.model.Papeis;
import br.com.APIrest.APIrest.repository.RepositoryPapeis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
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
}
