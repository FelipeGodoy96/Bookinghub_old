package br.com.bookinghubgodoynetworks.api.controller;

import br.com.bookinghubgodoynetworks.api.dto.BookingDTO;
import br.com.bookinghubgodoynetworks.api.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAllBookings() {
        List<BookingDTO> bookings = service.findAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<BookingDTO>> getBookingById (Long id) {
        Optional<BookingDTO> bookingDto = service.findBookingById(id);
        return new ResponseEntity<>(bookingDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking (@RequestBody BookingDTO bookingDto) {
        bookingDto = service.addBooking(bookingDto);
        return new ResponseEntity<>(bookingDto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyBooking (@PathVariable Long id) {
        service.removeBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookingDTO> refreshBooking (@PathVariable Long id, @RequestBody BookingDTO bookingDto) {
        bookingDto = service.updateBooking(id, bookingDto);
        return new ResponseEntity<>(bookingDto, HttpStatus.OK);
    }
}
