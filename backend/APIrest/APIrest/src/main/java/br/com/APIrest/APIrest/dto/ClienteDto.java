package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Cliente;
import br.com.APIrest.APIrest.model.Usuarios;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ClienteDto implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private Set<UsuariosDto> usuario = new HashSet<>();

    public ClienteDto() {
    }

    public ClienteDto(Integer id) {
        this.id = id;
    }

    public ClienteDto(Cliente cliente) {
        id = cliente.getId();
        cliente.getUsuario().forEach(usuarios -> this.usuario.add(new UsuariosDto(usuarios)));
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Set<UsuariosDto> getUsuario() {
        return usuario;
    }
    public void setUsuario(Set<UsuariosDto> usuario) {
        this.usuario = usuario;
    }
}
