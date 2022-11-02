package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class Produtos implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String descricao;

    @ManyToMany
    @JoinTable(name = "ProdutoCaracteristica",
    joinColumns = @JoinColumn(name = "ProdutoID"),
    inverseJoinColumns = @JoinColumn(name = "CaracteristicaID"))
    Set<Caracteristicas> caracteristica = new HashSet<>();

    public Produtos() {
    }

    public Produtos(Integer id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.caracteristica = caracteristica;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<Caracteristicas> getCaracteristica() {
        return caracteristica;
    }
}
