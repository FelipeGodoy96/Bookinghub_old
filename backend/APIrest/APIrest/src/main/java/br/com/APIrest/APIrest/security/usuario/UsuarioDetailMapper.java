package br.com.APIrest.APIrest.security.usuario;

import br.com.APIrest.APIrest.model.Usuarios;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;

@Configuration
public class UsuarioDetailMapper implements UserDetailsMapper {

    @Override
    public UserDetails map(Object shouldBeASystemUser) {
        return new UsuarioLogado((Usuarios) shouldBeASystemUser);
    }
}
