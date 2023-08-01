package br.com.bookinghubgodoynetworks.api.service;

import br.com.bookinghubgodoynetworks.api.dto.BookingDTO;
import br.com.bookinghubgodoynetworks.api.model.Booking;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import br.com.bookinghubgodoynetworks.api.repository.BookingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    BookingRepository repository;

    /**
     * Method to retrieve all bookings.
     * @return every booking from the database.
     */
    @Transactional(readOnly = true)
    public List<BookingDTO> findAllBookings() {
        List<Booking> list = repository.findAll();
        return list.stream().map(booking -> new ModelMapper().map(booking,BookingDTO.class)).collect(Collectors.toList());
    }

    /**
     * Method that return a booking by its ID.
     * @param id of the searched booking.
     * @return a booking.
     */
    @Transactional(readOnly = true)
    public Optional<BookingDTO> findBookingById(Long id) {
        // Obtaining Booking Optional by its ID.
        Optional<Booking> booking = repository.findById(id);
        // If it couldn't find, throw an Exception
        if (booking.isEmpty()) {
            throw new ResourceNotFoundException("Booking ID " + id + " could not be found.");
        }
        // Convert the found Optional into a DTO.
        BookingDTO dto = new ModelMapper().map(booking.get(), BookingDTO.class);
        // Creating and returning an Optional of DTO.
        return Optional.of(dto);
    }


    /**
     * Method that adds a booking to the database
     * @param bookingDto to be added
     * @return the added booking
     */
    public BookingDTO addBooking (BookingDTO bookingDto) {
        Booking booking = new ModelMapper().map(bookingDto, Booking.class);
        repository.save(booking);
        return new BookingDTO(booking);
    }

    /**
     * Deletes a booking from the databases
     * @param id from the booking to be deleted
     */
    public void removeBooking (Long id) {
        if (findBookingById(id).isEmpty()) {
            throw new ResourceNotFoundException("Booking ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    /**
     * Method that updates a booking on the database
     * @param id of the booking to be updated
     * @param bookingDto to be updated
     * @return booking after being updated on the database
     */
    public BookingDTO updateBooking (Long id, BookingDTO bookingDto) {
        if (findBookingById(id).isEmpty()) {
            throw new ResourceNotFoundException("Booking ID " + id + " not found");
        }
        /**
         * Instantiating a variable of type Booking with name booking
         * which receives a ModelMapper and calls map method to
         * copy BookingDTO information received on the request.
         */
        bookingDto.setId(id);
        Booking booking = new ModelMapper().map(bookingDto, Booking.class);
        booking = repository.save(booking);
        return new BookingDTO(booking);
    }
}
