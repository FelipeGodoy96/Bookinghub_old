package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Reservas;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

public class ReservasDto implements Serializable {
    private static long serialVersionUID = 1L;
    private Integer id;
    private Time h_inic_reser;
    private Date d_inic_reser;
    private Date d_fin_reser;
    private IdUsuarioDto usuario;
    private IdProdutoDto produtos;

    public ReservasDto() {
    }

    public ReservasDto(Integer id, Time h_inic_reser, Date d_inic_reser, Date d_fin_reser) {
        this.id = id;
        this.h_inic_reser = h_inic_reser;
        this.d_inic_reser = d_inic_reser;
        this.d_fin_reser = d_fin_reser;
    }

    public ReservasDto(Reservas reservas) {
        id = reservas.getId();
        h_inic_reser = reservas.getH_inic_reser();
        d_inic_reser = reservas.getD_inic_reser();
        d_fin_reser = reservas.getD_fin_reser();
        this.usuario = new IdUsuarioDto(reservas.getUsuarios());
        this.produtos = new IdProdutoDto(reservas.getProdutos());
    }


    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public Time getH_inic_reser() {
        return h_inic_reser;
    }
    public void setH_inic_reser(Time h_inic_reser) {
        this.h_inic_reser = h_inic_reser;
    }

    public Date getD_inic_reser() {
        return d_inic_reser;
    }
    public void setD_inic_reser(Date d_inic_reser) {
        this.d_inic_reser = d_inic_reser;
    }

    public Date getD_fin_reser() {
        return d_fin_reser;
    }
    public void setD_fin_reser(Date d_fin_reser) {
        this.d_fin_reser = d_fin_reser;
    }

    public IdUsuarioDto getUsuario() {
        return usuario;
    }
    public void setUsuario(IdUsuarioDto usuario) {
        this.usuario = usuario;
    }

    public IdProdutoDto getProdutos() {
        return produtos;
    }
    public void setProdutos(IdProdutoDto produtos) {
        this.produtos = produtos;
    }
}
