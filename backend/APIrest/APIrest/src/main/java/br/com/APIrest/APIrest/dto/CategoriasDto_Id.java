package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Categorias;

import java.io.Serializable;

public class CategoriasDto_Id implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
//    private String qualificacao;
//    private String descricao;
//    private String imagem;

    public CategoriasDto_Id() {
    }

    public CategoriasDto_Id(Integer id, String qualificacao, String descricao, String imagem) {
        this.id = id;
//        this.qualificacao = qualificacao;
//        this.descricao = descricao;
//        this.imagem = imagem;
    }

    public CategoriasDto_Id(Categorias categorias) {
        id = categorias.getId();
//        qualificacao = categorias.getQualificacao();
//        descricao = categorias.getDescricao();
//        imagem = categorias.getImagem();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

//    public String getQualificacao() {
//        return qualificacao;
//    }
//    public void setQualificacao(String qualificacao) {
//        this.qualificacao = qualificacao;
//    }
//
//    public String getDescricao() {
//        return descricao;
//    }
//    public void setDescricao(String descricao) {
//        this.descricao = descricao;
//    }
//
//    public String getImagem() {
//        return imagem;
//    }
//    public void setImagem(String imagem) {
//        this.imagem = imagem;
//    }
}
