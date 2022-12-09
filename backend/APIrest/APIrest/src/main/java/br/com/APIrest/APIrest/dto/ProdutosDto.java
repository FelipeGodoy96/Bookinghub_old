package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Produtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ProdutosDto implements Serializable {
    private static long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String descricao;
    private CidadesDto_Id cidades;
    private CategoriasDto_Id categoria;
    private List<ReservasDto_Id> reserva = new ArrayList<>();
    private List<ImagensDto> imagens = new ArrayList<>();
    private Set<CaracteristicasDto> caracteristica = new HashSet<>();

    public ProdutosDto() {
    }

    public ProdutosDto(Integer id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public ProdutosDto(Produtos produtos) {
        id = produtos.getId();
        nome = produtos.getNome();
        descricao = produtos.getDescricao();
        this.cidades = new CidadesDto_Id(produtos.getCidades());
        this.categoria = new CategoriasDto_Id(produtos.getCategorias());
        produtos.getReserva().forEach(reservas -> this.reserva.add(new ReservasDto_Id(reservas)));
        produtos.getImagens().forEach(imagensAnuncio -> this.imagens.add(new ImagensDto(imagensAnuncio)));
        produtos.getCaracteristica().forEach(caracteristicas -> this.caracteristica.add(new CaracteristicasDto(caracteristicas)));
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<CaracteristicasDto> getCaracteristica() {
        return caracteristica;
    }

    public List<ReservasDto_Id> getReserva() {
        return reserva;
    }
    public void setReserva(List<ReservasDto_Id> reserva) {
        this.reserva = reserva;
    }

    public List<ImagensDto> getImagens() {
        return imagens;
    }
    public void setImagens(List<ImagensDto> imagens) {
        this.imagens = imagens;
    }

    public CidadesDto_Id getCidades() {
        return cidades;
    }
    public void setCidades(CidadesDto_Id cidades) {
        this.cidades = cidades;
    }

    public CategoriasDto_Id getCategoria() {
        return categoria;
    }
    public void setCategoria(CategoriasDto_Id categoria) {
        this.categoria = categoria;
    }
}
