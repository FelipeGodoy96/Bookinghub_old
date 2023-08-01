package br.com.bookinghubgodoynetworks.api.repository;

import br.com.bookinghubgodoynetworks.api.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
