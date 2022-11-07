package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Produtos;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ProdutosDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String descricao;

    //private Set<CidadesDto> cidade = new HashSet<>();
    private Set<CategoriasDto> categoria = new HashSet<>();
    private Set<CaracteristicasDto> caracteristica = new HashSet<>();

    public ProdutosDto() {
    }

    public ProdutosDto(Integer id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public ProdutosDto(Produtos produtos) {
        id = produtos.getId();
        nome = produtos.getNome();
        descricao = produtos.getDescricao();
        produtos.getCategoria().forEach(categorias -> this.categoria.add(new CategoriasDto(categorias)));
        produtos.getCaracteristica().forEach(caracteristicas -> this.caracteristica.add(new CaracteristicasDto(caracteristicas)));
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    //public Set<CidadesDto> getCidade() { return cidade; }
    //public void setCidade(Set<CidadesDto> cidade) { this.cidade = cidade; }

    public Set<CategoriasDto> getCategoria() {
        return categoria;
    }
    public void setCategoria(Set<CategoriasDto> categoria) {
        this.categoria = categoria;
    }

    public Set<CaracteristicasDto> getCaracteristica() {
        return caracteristica;
    }
}
