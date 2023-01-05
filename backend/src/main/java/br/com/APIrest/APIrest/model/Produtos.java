package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "produtos")
public class Produtos implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @SequenceGenerator(name = "produto_sequence", sequenceName = "produto_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    @Column(columnDefinition="TEXT")
    private String descricao;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "cidade_mtone", nullable = true)
    private Cidades cidades;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "categoria_onetm")
    private Categorias categorias;
    @OneToMany(mappedBy = "produtos", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Reservas> reserva = new HashSet<>();
    @OneToMany(mappedBy = "produtos", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Imagens> imagens = new HashSet<>();
    @ManyToMany
    @JoinTable(name = "produtoCaracteristica",
    joinColumns = @JoinColumn(name = "produtoID", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "caracteristicaID", referencedColumnName = "id"))
    private List<Caracteristicas> caracteristicas = new ArrayList<>();

    public Produtos() {
    }

    public Produtos(Integer id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
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

    public Categorias getCategorias() {
        return categorias;
    }
    public void setCategorias(Categorias categorias) {
        this.categorias = categorias;
    }

    public Cidades getCidades() {
        return cidades;
    }
    public void setCidades(Cidades cidades) {
        this.cidades = cidades;
    }

    public Set<Reservas> getReserva() {
        return reserva;
    }
    public void setReserva(Set<Reservas> reserva) {
        this.reserva = reserva;
    }

    public Set<Imagens> getImagens() {
        return imagens;
    }
    public void setImages(Set<Imagens> imagens) {
        this.imagens = imagens;
    }

    public List<Caracteristicas> getCaracteristicas() {
        return caracteristicas;
    }
    public void setCaracteristicas(List<Caracteristicas> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}
