package br.com.lionsrest.LionsRest.dto;

import br.com.lionsrest.LionsRest.model.Categorias;

import java.io.Serializable;

public class CategoriasDto implements Serializable {

    private static long serialVersionUID = 1L;

    private Integer id;
    private String qualificacao;
    private String descricao;
    private String imagem;

    public CategoriasDto() {
    }

    public CategoriasDto(Integer id, String qualificacao, String descricao, String imagem) {
        this.id = id;
        this.qualificacao = qualificacao;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public CategoriasDto(Categorias categorias) {
        this.id = categorias.getId();
        this.qualificacao = categorias.getQualificacao();
        this.descricao = categorias.getDescricao();
        this.imagem = categorias.getImagem();
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
}
