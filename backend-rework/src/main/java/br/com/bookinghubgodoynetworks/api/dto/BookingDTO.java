package br.com.bookinghubgodoynetworks.api.dto;

import br.com.bookinghubgodoynetworks.api.model.Booking;
import br.com.bookinghubgodoynetworks.api.model.Housing;
import br.com.bookinghubgodoynetworks.api.model.User;

import java.io.Serializable;
import java.time.LocalDate;

public class BookingDTO implements Serializable {

    private static final Long serialVersionUID = 1L;

    private Long id;

    private String status;

    private Housing housing;

    private LocalDate checkIn;

    private LocalDate checkOut;

    private int numberOfGuests;

    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Housing getHousing() {
        return housing;
    }

    public void setHousing(Housing housing) {
        this.housing = housing;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BookingDTO() {
    }

    public BookingDTO(Long id, String status, Housing housing, LocalDate checkIn, LocalDate checkOut, int numberOfGuests, User user) {
        this.id = id;
        this.status = status;
        this.housing = housing;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.numberOfGuests = numberOfGuests;
        this.user = user;
    }

    public BookingDTO(Booking booking) {
        id = booking.getId();
        status = booking.getStatus();
        housing = booking.getHousing();
        checkIn = booking.getCheckIn();
        checkOut = booking.getCheckOut();
        numberOfGuests = booking.getNumberOfGuests();
        user = booking.getUser();
    }
}
