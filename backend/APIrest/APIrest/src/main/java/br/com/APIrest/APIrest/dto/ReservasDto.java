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
    private String hospede_nome;
    private String hospede_sobrenome;
    private String hospede_email;
    private String hospede_cidade;
    private UsuariosDto_Id usuario;
    private ProdutosDto_Id produtos;

    public ReservasDto() {
    }

    public ReservasDto(Integer id, Time h_inic_reser, Date d_inic_reser, Date d_fin_reser) {
        this.id = id;
        this.h_inic_reser = h_inic_reser;
        this.d_inic_reser = d_inic_reser;
        this.d_fin_reser = d_fin_reser;
        this.hospede_nome = hospede_nome;
        this.hospede_sobrenome = hospede_sobrenome;
        this.hospede_email = hospede_email;
        this.hospede_cidade = hospede_cidade;
    }

    public ReservasDto(Reservas reservas) {
        id = reservas.getId();
        h_inic_reser = reservas.getH_inic_reser();
        d_inic_reser = reservas.getD_inic_reser();
        d_fin_reser = reservas.getD_fin_reser();
        hospede_nome = reservas.getHospede_nome();
        hospede_sobrenome = reservas.getHospede_sobrenome();
        hospede_email = reservas.getHospede_email();
        hospede_cidade = reservas.getHospede_cidade();
        this.usuario = new UsuariosDto_Id(reservas.getUsuarios());
        this.produtos = new ProdutosDto_Id(reservas.getProdutos());
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

    public String getHospede_nome() {
        return hospede_nome;
    }
    public void setHospede_nome(String hospede_nome) {
        this.hospede_nome = hospede_nome;
    }

    public String getHospede_sobrenome() {
        return hospede_sobrenome;
    }
    public void setHospede_sobrenome(String hospede_sobrenome) {
        this.hospede_sobrenome = hospede_sobrenome;
    }

    public String getHospede_email() {
        return hospede_email;
    }
    public void setHospede_email(String hospede_email) {
        this.hospede_email = hospede_email;
    }

    public String getHospede_cidade() {
        return hospede_cidade;
    }
    public void setHospede_cidade(String hospede_cidade) {
        this.hospede_cidade = hospede_cidade;
    }

    public UsuariosDto_Id getUsuario() {
        return usuario;
    }
    public void setUsuario(UsuariosDto_Id usuario) {
        this.usuario = usuario;
    }

    public ProdutosDto_Id getProdutos() {
        return produtos;
    }
    public void setProdutos(ProdutosDto_Id produtos) {
        this.produtos = produtos;
    }
}
