package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Imagens;

import java.io.Serializable;

public class ImagensDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String titulo;
    private String url;
    private IdProdutoDto produto;

    public ImagensDto() {
    }

    public ImagensDto(Integer id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
    }

    public ImagensDto(Imagens imagens) {
        id = imagens.getId();
        titulo = imagens.getTitulo();
        url = imagens.getUrl();
        this.produto = new IdProdutoDto(imagens.getProdutos());
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

    public IdProdutoDto getProduto() {
        return produto;
    }
    public void setProduto(IdProdutoDto produto) {
        this.produto = produto;
    }
}
