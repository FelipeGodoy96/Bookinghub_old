package br.com.APIrest.APIrest.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class ImagensAnuncio implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String url;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "imagens_produtos")
    private Produtos produtos;

    public ImagensAnuncio() {
    }

    public ImagensAnuncio(Integer id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }

    public Produtos getProdutos() {
        return produtos;
    }
    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }
}
