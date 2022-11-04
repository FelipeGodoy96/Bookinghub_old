package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Categorias implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "categorias_sequence", sequenceName = "categorias_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    private Integer id;
    private String qualificacao;
    private String descricao;
    private String imagem;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "produto_onetm")
    private Produtos produtos_one;



    public Categorias() {
    }

    public Categorias(Integer id, String qualificacao, String descricao, String imagem) {
        this.id = id;
        this.qualificacao = qualificacao;
        this.descricao = descricao;
        this.imagem = imagem;
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

    public Produtos getProdutos() {
        return produtos_one;
    }
    public void setProdutos(Produtos produtos) {
        this.produtos_one = produtos;
    }
}
