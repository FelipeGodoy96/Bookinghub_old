package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Cidades;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CidadesDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String pais;

    private List<ProdutosDto> produtos = new ArrayList<>();

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
        cidades.getProdutos().forEach(produtos -> this.produtos.add(new ProdutosDto(produtos)));

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

    public List<ProdutosDto> getProdutos() {
        return produtos;
    }
    public void setProdutos(List<ProdutosDto> produtos) {
        this.produtos = produtos;
    }
}
