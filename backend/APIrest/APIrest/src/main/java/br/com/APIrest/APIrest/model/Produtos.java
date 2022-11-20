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
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    @Column(columnDefinition="TEXT")
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "cidade_mtone")
    private Cidades cidades;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "categoria_onetm")
    private Categorias categorias;

    @OneToMany(mappedBy = "produtos", fetch = FetchType.LAZY)
    private List<Reservas> reserva;
//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "produtos_reservas")
//    private Produtos produtos;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "usuarios_produtos")
    private Usuarios usuarios;

    @ManyToMany
    @JoinTable(name = "produtoCaracteristica",
    joinColumns = @JoinColumn(name = "produtoID", referencedColumnName = "id"),
    inverseJoinColumns = @JoinColumn(name = "caracteristicaID", referencedColumnName = "id"))
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

    public Categorias getCategorias() {
        return categorias;
    }
    public void setCategorias(Categorias categorias) {
        this.categorias = categorias;
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

//    public Produtos getProdutos() {
//        return produtos;
//    }
//    public void setProdutos(Produtos produtos) {
//        this.produtos = produtos;
//    }
    public Usuarios getUsuarios() {
        return usuarios;
    }
    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public List<Reservas> getReserva() {
        return reserva;
    }
    public void setReserva(List<Reservas> reserva) {
        this.reserva = reserva;
    }
}
