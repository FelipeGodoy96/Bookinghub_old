package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Caracteristicas;

import java.io.Serializable;

public class CaracteristicasDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private  String icone;

    public CaracteristicasDto() {
    }

    public CaracteristicasDto(Integer id, String nome, String icone) {
        this.id = id;
        this.nome = nome;
        this.icone = icone;
    }

    public CaracteristicasDto(Caracteristicas caracteristicas) {
        id = caracteristicas.getId();
        nome = caracteristicas.getNome();
        icone = caracteristicas.getIcone();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIcone() {
        return icone;
    }
    public void setIcone(String icone) {
        this.icone = icone;
    }
}
