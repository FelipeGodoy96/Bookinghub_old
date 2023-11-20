package br.com.bookinghubgodoynetworks.api.dto;


import br.com.bookinghubgodoynetworks.api.model.Client;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class ClientDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    private Long id;

    private String fullname;

    private String nickname;

    private String email;

    private String password;

    private LocalDate birthdate;

    private Set<RoleDTO> roles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public Set<RoleDTO> getRoles() {
        return roles;
    }

    public void setRoles(Set<RoleDTO> roles) {
        this.roles = roles;
    }

    public ClientDTO() {
    }

    public ClientDTO(Long id, String fullname, String nickname, String email, String password, LocalDate birthdate, Set<RoleDTO> roles) {
        this.id = id;
        this.fullname = fullname;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.roles = roles;
    }

    public ClientDTO(Client client){
        id = client.getId();
        fullname = client.getFullname();
        nickname = client.getNickname();
        email = client.getEmail();
        password = client.getPassword();
        birthdate = client.getBirthdate();
        client.getRoles().forEach(role -> this.roles.add(new RoleDTO (role)));
    }
}
