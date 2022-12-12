package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Imagens;
import br.com.APIrest.APIrest.model.Produtos;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ProdutosDto_Id implements Serializable {
    public static final long serialVersionUID = 1L;

    private Integer id;
//    private String nome;
//    private String descricao;

    public ProdutosDto_Id() {
    }

    public ProdutosDto_Id(Integer id, String nome, String descricao) {
        this.id = id;
//        this.nome = nome;
//        this.descricao = descricao;
    }

    public ProdutosDto_Id(Produtos produtos) {
        this.id = produtos.getId();
//        this.nome = produtos.getNome();
//        this.descricao = produtos.getDescricao();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

//    public String getNome() {
//        return nome;
//    }
//    public void setNome(String nome) {
//        this.nome = nome;
//    }
//
//    public String getDescricao() {
//        return descricao;
//    }
//    public void setDescricao(String descricao) {
//        this.descricao = descricao;
//    }
}
