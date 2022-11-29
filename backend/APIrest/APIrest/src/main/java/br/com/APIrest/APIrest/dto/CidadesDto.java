package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Cidades;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class CidadesDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String pais;

    //private Set<ProdutosDto> produto = new HashSet<>();

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
        //cidades.getProduto().forEach(produtos -> this.produto.add(new ProdutosDto(produtos)));
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

    //public Set<ProdutosDto> getProduto() { return produto; }
    //public void setProduto(Set<ProdutosDto> produto) { this.produto = produto; }
}
