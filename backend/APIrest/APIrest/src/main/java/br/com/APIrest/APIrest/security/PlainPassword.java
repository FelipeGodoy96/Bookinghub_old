package br.com.APIrest.APIrest.security;

import org.hibernate.validator.constraints.Length;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;

public class PlainPassword {

    private String password;

    public PlainPassword(@NotBlank @Length(min = 5) String openPassword) {
        Assert.hasLength(openPassword, "Senha não pode ser em branco");
        Assert.isTrue(openPassword.length()>=5, "Senha precisa ter no mínimo 5 caraceteres");
        this.password = openPassword;
    }

    public String encode(){
        return new BCryptPasswordEncoder().encode(this.password);
    }
}
