package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServiceUsuarios implements UserDetailsService {
    @Autowired
    RepositoryUsuarios repositoryUsuarios;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuarios usuarios = repositoryUsuarios.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Email Não encontrado: " + username));

        return ServiceUsuariosDetailsImplement.build(usuarios);
    }
}
