package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Cidades;

import java.io.Serializable;

public class CidadesDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String pais;

    public CidadesDto() {
    }

    public CidadesDto(Integer id, String nome, String pais) {
        this.id = id;
        this.nome = nome;
        this.pais = pais;
    }

    public CidadesDto(Cidades cidades) {
        id = cidades.getId();
        nome = cidades.getNome();
        pais = cidades.getPais();
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
}
