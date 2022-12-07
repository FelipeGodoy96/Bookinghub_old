package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Produtos;

import java.io.Serializable;

public class IdProdutoDto implements Serializable {
    public static final long serialVersionUID = 1L;

    private Integer id;

    public IdProdutoDto() {
    }

    public IdProdutoDto(Integer id) {
        this.id = id;
    }

    public IdProdutoDto(Produtos produtos) {
        this.id = produtos.getId();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
}
