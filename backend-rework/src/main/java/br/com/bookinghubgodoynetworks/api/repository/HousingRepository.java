package br.com.bookinghubgodoynetworks.api.repository;

import br.com.bookinghubgodoynetworks.api.model.Housing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HousingRepository extends JpaRepository<Housing, Long> {
}
