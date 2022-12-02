package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Papeis;

import java.io.Serializable;

public class PapeisDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String authority;

    public PapeisDto() {
    }

    public PapeisDto(Integer id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public PapeisDto(Papeis papeis) {
        id = papeis.getId();
        authority = papeis.getAuthority();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }
    public void setAuthority(String authority) {
        this.authority = authority;
    }
}

