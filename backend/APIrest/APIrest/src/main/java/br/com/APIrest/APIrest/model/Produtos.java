package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "produtos")
public class Produtos implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @SequenceGenerator(name = "produto_sequence", sequenceName = "produto_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    private Integer id;
    private String nome;
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "cidade_mtone")
    private Cidades cidades;

    @OneToMany(mappedBy = "produtos", fetch = FetchType.LAZY)
    private List<Categorias> categoria;

    @ManyToMany
    @JoinTable(name = "produtoCaracteristica",
    joinColumns = @JoinColumn(name = "produtoID"),
    inverseJoinColumns = @JoinColumn(name = "caracteristicaID"))
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

    public List<Categorias> getCategoria() {
        return categoria;
    }
    public void setCategoria(List<Categorias> categoria) {
        this.categoria = categoria;
    }

    public Set<Caracteristicas> getCaracteristica() {
        return caracteristica;
    }
    public void setCaracteristica(Set<Caracteristicas> caracteristica) { this.caracteristica = caracteristica; }

    public Cidades getCidades() {
        return cidades;
    }
    public void setCidades(Cidades cidades) {
        this.cidades = cidades;
    }
}
