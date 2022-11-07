package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "cidades")
public class Cidades implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @SequenceGenerator(name = "cidade_sequence", sequenceName = "cidade_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String pais;

    @OneToMany(mappedBy = "cidades", fetch = FetchType.LAZY)
    private List<Produtos> produto;

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

    public List<Produtos> getProduto() {
        return produto;
    }
    public void setProduto(List<Produtos> produto) {
        this.produto = produto;
    }
}
