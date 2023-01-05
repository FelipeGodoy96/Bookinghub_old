package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Usuarios;

import java.io.Serializable;

public class ReservasUsuarioDto implements Serializable {
    public static final long serialVersionUID = 1L;

    private Long id;


    public ReservasUsuarioDto() {
    }

    public ReservasUsuarioDto(Long id) {
        this.id = id;
    }

    public ReservasUsuarioDto(Usuarios usuarios) {
        id = usuarios.getId();
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
}
