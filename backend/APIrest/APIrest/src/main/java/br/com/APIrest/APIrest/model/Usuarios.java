package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "usuarios", uniqueConstraints = { @UniqueConstraint(columnNames = "username") })
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "E-mail obrigatório!")
    @Email(message = "E-mail inválido!")
    @Column(unique = true)
    private String username; //username = Email
    @NotBlank(message = "Nome obrigatório!")
    private String nome;
    private String sobrenome;
    @NotBlank(message = "Senha obrigatório!")
    private String password;// Criptografado
    @OneToMany(mappedBy = "usuarios", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Reservas> reservas = new HashSet<>();
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "usuario_papeis",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "papeis_id"))
    private Set<Role> roles = new HashSet<>();

    public Usuarios() {
    }

    public Usuarios(Long id, String username, String nome, String sobrenome, String password) {
        this.id = id;
        this.username = username;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.password = password;
    }

    public Usuarios(String username, String nome, String sobrenome, String password) {
        this.username = username;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public Set<Reservas> getReservas() {
//        return reservas;
//    }
//    public void setReservas(Set<Reservas> reservas) {
//        this.reservas = reservas;
//    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
