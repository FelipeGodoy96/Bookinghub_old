package br.com.bookinghubgodoynetworks.api.repository;

import br.com.bookinghubgodoynetworks.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
