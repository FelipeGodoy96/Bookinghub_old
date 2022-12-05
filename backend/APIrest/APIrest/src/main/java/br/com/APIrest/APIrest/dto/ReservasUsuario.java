package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Usuarios;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ReservasUsuario implements Serializable {
    public static final long serialVersionUID = 1L;

    private Long id;
    private Set<ReservasDto> reserva = new HashSet<>();

    public ReservasUsuario() {
    }

    public ReservasUsuario(Long id) {
        this.id = id;
    }

    public ReservasUsuario(Usuarios usuarios) {
        id = usuarios.getId();
        usuarios.getReserva().forEach(reservas -> this.reserva.add(new ReservasDto(reservas)));
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Set<ReservasDto> getReserva() {
        return reserva;
    }
    public void setReserva(Set<ReservasDto> reserva) {
        this.reserva = reserva;
    }
}
