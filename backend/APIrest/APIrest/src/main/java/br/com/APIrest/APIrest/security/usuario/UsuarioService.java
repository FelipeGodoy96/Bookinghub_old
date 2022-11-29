package br.com.APIrest.APIrest.security.usuario;

import br.com.APIrest.APIrest.dto.ImagensAnuncioDto;
import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.model.ImagensAnuncio;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;


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

    public UsuariosDto findById(Integer id){
        Usuarios usuarios = usuariosRepository.getReferenceById(id);
        UsuariosDto usuariosDto = usuarios.toDto();
        return usuariosDto;
    }
}
