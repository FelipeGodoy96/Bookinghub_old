package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Categorias;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class CategoriasDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String qualificacao;
    private String descricao;
    private String imagem;
    private List<ProdutosDto> produtos = new ArrayList<>();

    public CategoriasDto() {
    }

    public CategoriasDto(Integer id, String qualificacao, String descricao, String imagem) {
        this.id = id;
        this.qualificacao = qualificacao;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public CategoriasDto(Categorias categorias) {
        id = categorias.getId();
        qualificacao = categorias.getQualificacao();
        descricao = categorias.getDescricao();
        imagem = categorias.getImagem();
        categorias.getProduto().forEach(produto -> this.produtos.add(new ProdutosDto(produto)));
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getQualificacao() {
        return qualificacao;
    }
    public void setQualificacao(String qualificacao) {
        this.qualificacao = qualificacao;
    }

    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public List<ProdutosDto> getProdutos() {
        return produtos;
    }
    public void setProdutos(List<ProdutosDto> produtos) {
        this.produtos = produtos;
    }
}
