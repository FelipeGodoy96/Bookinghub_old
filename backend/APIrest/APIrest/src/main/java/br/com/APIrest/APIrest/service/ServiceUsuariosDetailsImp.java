package br.com.APIrest.APIrest.service;

import br.com.APIrest.APIrest.model.Usuarios;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class ServiceUsuariosDetailsImp implements UserDetails {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;
    private String nome;
    private String sobrenome;
    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public ServiceUsuariosDetailsImp(Long id, String username, String nome, String sobrenome, String password,
                                     Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.password = password;
        this.authorities = authorities;
    }

    public static ServiceUsuariosDetailsImp build(Usuarios usuarios) {
        List<GrantedAuthority> authorities = usuarios.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());

        return new ServiceUsuariosDetailsImp(
                usuarios.getId(),
                usuarios.getUsername(),
                usuarios.getNome(),
                usuarios.getSobrenome(),
                usuarios.getPassword(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ServiceUsuariosDetailsImp user = (ServiceUsuariosDetailsImp) o;
        return Objects.equals(id, user.id);
    }
}
