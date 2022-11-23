package br.com.APIrest.APIrest.security.usuario;

import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private RepositoryUsuarios usuariosRepository;

    @Autowired
    private UserDetailsMapper userDetailsMapper;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        Usuarios usuarios = usuariosRepository.findUsuarioByUsername(userName).orElseThrow(EntityNotFoundException::new);

        return userDetailsMapper.map(usuarios);
    }
}
