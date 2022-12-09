package br.com.APIrest.APIrest.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cidades")
public class Cidades implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @SequenceGenerator(name = "cidade_sequence", sequenceName = "cidade_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String pais;
    @OneToMany(mappedBy = "cidades", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    private Set<Produtos> produtos = new HashSet<>();

    public Cidades() {
    }

    public Cidades(Integer id, String nome, String pais) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
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

    public String getPais() {
        return pais;
    }
    public void setPais(String pais) {
        this.pais = pais;
    }

    public Set<Produtos> getProdutos() {
        return produtos;
    }
    public void setProdutos(Set<Produtos> produtos) {
        this.produtos = produtos;
    }
}
