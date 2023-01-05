package br.com.APIrest.APIrest.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

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
    private String hospede_nome;
    private String hospede_sobrenome;
    @NotBlank(message = "E-mail obrigatório!")
    @Email(message = "E-mail inválido!")
    private String hospede_email;
    private String hospede_cidade;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "reservas_produtos")
    private Produtos produtos;
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "usuario_id", nullable = true)
    private Usuarios usuarios;

    public Reservas() {
    }

    public Reservas(Integer id, Time h_inic_reser, Date d_inic_reser, Date d_fin_reser, String hospede_nome, String hospede_sobrenome, String hospede_email, String hospede_cidade) {
        this.id = id;
        this.h_inic_reser = h_inic_reser;
        this.d_inic_reser = d_inic_reser;
        this.d_fin_reser = d_fin_reser;
        this.hospede_nome = hospede_nome;
        this.hospede_sobrenome = hospede_sobrenome;
        this.hospede_email = hospede_email;
        this.hospede_cidade = hospede_cidade;
    }

    public Reservas(Time h_inic_reser, Date d_inic_reser, Date d_fin_reser) {
        this.h_inic_reser = h_inic_reser;
        this.d_inic_reser = d_inic_reser;
        this.d_fin_reser = d_fin_reser;
        this.hospede_nome = hospede_nome;
        this.hospede_sobrenome = hospede_sobrenome;
        this.hospede_email = hospede_email;
        this.hospede_cidade = hospede_cidade;
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
    public void setUsuario(Usuarios usuarios) {
        this.usuarios = usuarios;
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
}
