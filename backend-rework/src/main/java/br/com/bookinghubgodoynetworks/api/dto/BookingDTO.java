    package br.com.bookinghubgodoynetworks.api.dto;

    import br.com.bookinghubgodoynetworks.api.model.Booking;
    import br.com.bookinghubgodoynetworks.api.model.Housing;
    import br.com.bookinghubgodoynetworks.api.model.Client;

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

        private Client client;

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

        public Client getClient() {
            return client;
        }

        public void setClient(Client client) {
            this.client = client;
        }

        public BookingDTO() {
        }

        public BookingDTO(Long id, String status, Housing housing, LocalDate checkIn, LocalDate checkOut, int numberOfGuests, Client client) {
            this.id = id;
            this.status = status;
            this.housing = housing;
            this.checkIn = checkIn;
            this.checkOut = checkOut;
            this.numberOfGuests = numberOfGuests;
            this.client = client;
        }

        public BookingDTO(Booking booking) {
            id = booking.getId();
            status = booking.getStatus();
            housing = booking.getHousing();
            checkIn = booking.getCheckIn();
            checkOut = booking.getCheckOut();
            numberOfGuests = booking.getNumberOfGuests();
            client = booking.getClient();
        }
    }
