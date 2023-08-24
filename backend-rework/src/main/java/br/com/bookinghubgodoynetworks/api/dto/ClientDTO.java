package br.com.bookinghubgodoynetworks.api.dto;


import br.com.bookinghubgodoynetworks.api.model.Client;

import java.io.Serializable;
import java.time.LocalDate;

public class ClientDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    private Long id;

    private String fullName;

    private String nickname;

    private String email;

    private String password;

    private LocalDate birthDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return fullName;
    }

    public void setFirstName(String fullName) {
        this.fullName = fullName;
    }

    public String getLastName() {
        return nickname;
    }

    public void setLastName(String nickname) {
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

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public ClientDTO() {
    }

    public ClientDTO(Long id, String fullName, String nickname, String email, String password, LocalDate birthDate) {
        this.id = id;
        this.fullName = fullName;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
    }

    public ClientDTO(Client client){
        id = client.getId();
        fullName = client.getFirstName();
        nickname = client.getLastName();
        email = client.getEmail();
        password = client.getPassword();
        birthDate = client.getBirthDate();
    }
}
