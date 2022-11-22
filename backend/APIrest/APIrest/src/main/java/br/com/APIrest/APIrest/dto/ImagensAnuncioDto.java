package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.ImagensAnuncio;

import java.io.Serializable;

public class ImagensAnuncioDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String titulo;
    private String url;
    public ImagensAnuncioDto() {
    }

    public ImagensAnuncioDto(Integer id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
    }

    public ImagensAnuncioDto(ImagensAnuncio imagens) {
        id = imagens.getId();
        titulo = imagens.getTitulo();
        url = imagens.getUrl();
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
 }
