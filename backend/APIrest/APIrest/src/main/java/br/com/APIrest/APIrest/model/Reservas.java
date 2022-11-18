package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

@Entity
@Table(name = "reservas")
public class Reservas implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Time h_inic_reser;
    private Date d_inic_reser;
    private Date d_fin_reser;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "reservas_produtos")
    private Produtos produtos;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "reservas_usuarios")
    private Usuarios usuarios;

    public Reservas() {
    }

    public Reservas(Integer id, Time h_inic_reser, Date d_inic_reser, Date d_fin_reser) {
        this.id = id;
        this.h_inic_reser = h_inic_reser;
        this.d_inic_reser = d_inic_reser;
        this.d_fin_reser = d_fin_reser;
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

    public Produtos getProdutos() {
        return produtos;
    }
    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }
    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }
}
