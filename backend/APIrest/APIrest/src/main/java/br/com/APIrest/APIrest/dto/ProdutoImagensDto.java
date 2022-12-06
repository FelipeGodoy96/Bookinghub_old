package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Produtos;

import java.io.Serializable;

public class ProdutoImagensDto implements Serializable {
    public static final long serialVersionUID = 1L;

    private Integer id;

    public ProdutoImagensDto() {
    }

    public ProdutoImagensDto(Integer id) {
        this.id = id;
    }

    public ProdutoImagensDto(Produtos produtos) {
        this.id = produtos.getId();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
}
