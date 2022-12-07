package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table
public class Categorias implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "categorias_sequence", sequenceName = "categorias_sequence")
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String qualificacao;
    private String descricao;
    private String imagem;

    @OneToMany(mappedBy = "categorias", fetch = FetchType.LAZY)
    private List<Produtos> produto;

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

    public List<Produtos> getProduto() {
        return produto;
    }
    public void setProduto(List<Produtos> produto) {
        this.produto = produto;
    }
}
