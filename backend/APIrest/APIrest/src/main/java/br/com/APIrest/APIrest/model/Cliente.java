package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cliente")
public class Cliente {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

//    @OneToMany(mappedBy = "cliente", fetch = FetchType.LAZY)
//    private List<Usuarios> usuarios;


    @ManyToMany(fetch = FetchType.EAGER) // Força a busca dos perfis do usuário
    @JoinTable(name = "usuarios_clientes",
            joinColumns = @JoinColumn(name = "cliente_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "usuarios_id", referencedColumnName = "id"))
    private Set<Usuarios> usuario = new HashSet<>();

    public Cliente() {
    }

    public Cliente(Integer id, List<Usuarios> usuarios) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Set<Usuarios> getUsuario() {
        return usuario;
    }
    public void setUsuario(Set<Usuarios> usuario) {
        this.usuario = usuario;
    }
}
