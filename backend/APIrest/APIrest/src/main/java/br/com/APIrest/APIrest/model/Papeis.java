package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "papeis")
public class Papeis implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String authority;

    public Papeis() {
    }

    public Papeis(Integer id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public Integer getId() { return id; }
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

