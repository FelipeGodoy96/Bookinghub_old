package br.com.bookinghubgodoynetworks.api.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class Housing implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private Double rating;

    private Double dailyCost;

    private String address;

    private int capacity;

    @OneToMany
//    @JoinColumn(name = "booking_id")
    private HashSet<Booking> bookings = new HashSet<>();

    @ManyToOne
    private Category category;

    public Housing() {
    }

    public Housing(Long id, String name, String title, String description, Double rating) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.rating = rating;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Housing housing = (Housing) o;
        return Objects.equals(id, housing.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
