package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Usuarios;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Getter @NoArgsConstructor
public class UsuariosDto  {

    private Integer id;
    private String nome;
    private String sobrenome;
    private String username;
    private Set<ProdutosDto> produto = new HashSet<>();
    private Set<PapeisDto> papeis = new HashSet<>();

    public UsuariosDto(Integer id, String nome, String sobrenome, String username) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.username = username;
    }

    public UsuariosDto(Usuarios usuarios) {
        usuarios.getPapeis().forEach(papeis -> this.papeis.add(new PapeisDto(papeis)));
        usuarios.getProduto().forEach(produtos -> this.produto.add(new ProdutosDto(produtos)));
    }

    public Set<ProdutosDto> getProduto() {
        return produto;
    }
    public void setProduto(Set<ProdutosDto> produto) {
        this.produto = produto;
    }
}

