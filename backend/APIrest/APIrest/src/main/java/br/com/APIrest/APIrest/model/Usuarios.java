package br.com.APIrest.APIrest.model;

import br.com.APIrest.APIrest.dto.UsuariosDto;
import br.com.APIrest.APIrest.security.PlainPassword;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuarios implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false)
    private Integer id;
    private String email;
    private String senha; //criptografado
    private String nome;
    private String sobrenome;
    private LocalDateTime dataCriacao = LocalDateTime.now();
    @OneToMany(mappedBy = "usuarios", fetch = FetchType.LAZY)
    private List<Produtos> produto;
    @ManyToMany(fetch = FetchType.EAGER) // Força a busca dos perfis do usuário
    @JoinTable(name = "usuarios_papeis",
            joinColumns = @JoinColumn(name = "usuario_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "papeis_id", referencedColumnName = "id"))
    private Set<Papeis> papeis = new HashSet<>();

    public Usuarios() {
    }

    public Usuarios(String email, PlainPassword plainPassword, String nome, String sobrenome) {
        this.email = email;
        this.senha = plainPassword.encode();
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
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

    public List<Produtos> getProduto() {
        return produto;
    }
    public void setProduto(List<Produtos> produto) {
        this.produto = produto;
    }

    public Set<Papeis> getPapeis() {
        return papeis;
    }
    public void setPapeis(Set<Papeis> papeis) {
        this.papeis = papeis;
    }

    public UsuariosDto toDto() {
        return new UsuariosDto(
                this.id,
                this.nome,
                this.sobrenome,
                this.email
        );
    }
}
