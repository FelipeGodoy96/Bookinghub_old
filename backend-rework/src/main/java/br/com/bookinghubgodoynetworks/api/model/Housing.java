package br.com.bookinghubgodoynetworks.api.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Housing implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Name of the Hotel, Apartment, etc.
    private String name;

    // Title of the housing, example: King Room, Double Suite, Door 245, etc.
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private Double rating;

    private Double dailyCost;

    private String address;

    private int capacity;

    @OneToMany
//    @JoinColumn(name = "booking_id")
    private Set<Booking> bookings = new HashSet<>();

    @ManyToOne
    private Category category;

    // to implement "facilities"
    //@OneToMany
    //private Facility facilities = new HashSet<>();


    public Housing() {
    }

    public Housing(Long id, String name, String title, String description, Double rating, Double dailyCost, String address, int capacity, Set<Booking> bookings, Category category) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.dailyCost = dailyCost;
        this.address = address;
        this.capacity = capacity;
        this.bookings = bookings;
        this.category = category;
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

    public Double getDailyCost() {
        return dailyCost;
    }

    public void setDailyCost(Double dailyCost) {
        this.dailyCost = dailyCost;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
