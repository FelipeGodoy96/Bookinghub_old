package br.com.bookinghubgodoynetworks.api.dto;

import br.com.bookinghubgodoynetworks.api.model.Housing;

import java.io.Serializable;

public class HousingDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String title;
    private String description;
    private Double rating;

    public HousingDTO() {
    }

    public HousingDTO(Long id, String name, String title, String description, Double rating) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.rating = rating;
    }

    public HousingDTO(Housing housing) {
        id = housing.getId();
        name = housing.getName();
        title = housing.getTitle();
        description = housing.getDescription();
        rating = housing.getRating();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }
}
