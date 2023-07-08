package br.com.bookinghubgodoynetworks.api.repository;

import br.com.bookinghubgodoynetworks.api.model.SearchSuggestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SearchSuggestionRepository extends JpaRepository<SearchSuggestion, Long> {

//    @Query("SELECT * FROM search_suggestion ss ORDER BY ss.id ASC")
//    List<SearchSuggestion> getSuggestions(int limit, int offset);

    @Query(value = "SELECT * FROM search_suggestion ORDER BY search_count DESC LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<SearchSuggestion> getSuggestions(@Param("limit") int limit, @Param("offset") int offset);

}
