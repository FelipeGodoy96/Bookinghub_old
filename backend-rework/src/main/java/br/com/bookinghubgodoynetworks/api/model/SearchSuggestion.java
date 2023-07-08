package br.com.bookinghubgodoynetworks.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class SearchSuggestion implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String term;

    private int searchCount;

    public SearchSuggestion() {
    }

    public SearchSuggestion(String term, int searchCount) {
        this.term = term;
        this.searchCount = searchCount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public int getSearchCount() {
        return searchCount;
    }

    public void setSearchCount(int searchCount) {
        this.searchCount = searchCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SearchSuggestion that = (SearchSuggestion) o;
        return searchCount == that.searchCount && Objects.equals(id, that.id) && Objects.equals(term, that.term);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, term, searchCount);
    }
}
