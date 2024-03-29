package br.com.bookinghubgodoynetworks.api.repository;

import br.com.bookinghubgodoynetworks.api.model.SearchSuggestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SearchSuggestionRepository extends JpaRepository<SearchSuggestion, Long> {

    @Query(value = "SELECT * FROM search_suggestion ORDER BY search_count DESC LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<SearchSuggestion> getSuggestions(@Param("limit") int limit, @Param("offset") int offset);

}
