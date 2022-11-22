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
    private String urlFoto1;
    private String urlFoto2;
    private String urlFoto3;
    private String urlFoto4;
    private String urlFoto5;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "imagens_produtos")
    private Produtos produtos;

    public ImagensAnuncio() {
    }

    public ImagensAnuncio(Integer id, String titulo, String url, String urlFoto1, String urlFoto2, String urlFoto3, String urlFoto4, String urlFoto5) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
        this.urlFoto1 = urlFoto1;
        this.urlFoto2 = urlFoto2;
        this.urlFoto3 = urlFoto3;
        this.urlFoto4 = urlFoto4;
        this.urlFoto5 = urlFoto5;
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

    public String getUrlFoto1() {
        return urlFoto1;
    }
    public void setUrlFoto1(String urlFoto1) {
        this.urlFoto1 = urlFoto1;
    }

    public String getUrlFoto2() {
        return urlFoto2;
    }
    public void setUrlFoto2(String urlFoto2) {
        this.urlFoto2 = urlFoto2;
    }

    public String getUrlFoto3() {
        return urlFoto3;
    }
    public void setUrlFoto3(String urlFoto3) {
        this.urlFoto3 = urlFoto3;
    }

    public String getUrlFoto4() {
        return urlFoto4;
    }
    public void setUrlFoto4(String urlFoto4) {
        this.urlFoto4 = urlFoto4;
    }

    public String getUrlFoto5() {
        return urlFoto5;
    }
    public void setUrlFoto5(String urlFoto5) {
        this.urlFoto5 = urlFoto5;
    }

    public Produtos getProdutos() {
        return produtos;
    }
    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }
}
