package br.com.bookinghubgodoynetworks.api.dto;

import br.com.bookinghubgodoynetworks.api.model.SearchSuggestion;

import java.io.Serializable;

public class SearchSuggestionDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String term;

    private int searchCount;

    public SearchSuggestionDTO() {
    }

    public SearchSuggestionDTO(Long id, String term, int searchCount) {
        this.id = id;
        this.term = term;
        this.searchCount = searchCount;
    }

    public SearchSuggestionDTO(SearchSuggestion searchsuggestion) {
        id = searchsuggestion.getId();
        term = searchsuggestion.getTerm();
        searchCount = searchsuggestion.getSearchCount();
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
}
