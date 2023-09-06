package br.com.bookinghubgodoynetworks.api.dto;

import br.com.bookinghubgodoynetworks.api.model.Role;

import java.io.Serializable;

public class RoleDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    private Long id;

    private String level;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return level;
    }

    public void setRole(String role) {
        this.level = role;
    }

    public RoleDTO() {
    }

    public RoleDTO(Long id, String role) {
        this.id = id;
        this.level = role;
    }

    public RoleDTO(Role role) {
        id = role.getId();
        level = role.getRole();
    }
}
