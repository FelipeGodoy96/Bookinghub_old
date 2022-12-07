package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Reservas;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UsuariosDto_Reserva implements Serializable {
    private static long serialVersionUID = 1L;

    private Long id;

    private Set<Reservas> reservas = new HashSet<>();

    public UsuariosDto_Reserva() {
    }

    public UsuariosDto_Reserva(Long id) {
        this.id = id;
    }

    public UsuariosDto_Reserva(Reservas reservas) {
        this.id = id;

    }

}
