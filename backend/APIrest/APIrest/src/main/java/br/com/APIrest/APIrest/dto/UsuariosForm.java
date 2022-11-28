package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.security.PlainPassword;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter @NoArgsConstructor
public class UsuariosForm {
    @NotBlank(message = "Campo obrigatório!")
    private String nome;
    private String sobrenome;
    @Email(message = "E-mail inválido!")
    @Column(unique = true)
    private String username;
    @NotBlank(message = "Senha inválido!")
    private String senha; //criptografado

    public UsuariosForm(String nome, String sobrenome, String username, String senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.username = username;
        this.senha = senha;
    }

    public Usuarios toEntity(){
        return new Usuarios(
                this.username,
                new PlainPassword(this.senha),
                this.nome,
                this.sobrenome
        );
    }
}
