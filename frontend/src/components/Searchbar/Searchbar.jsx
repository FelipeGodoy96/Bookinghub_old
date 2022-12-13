/* eslint-disable react/no-array-index-key */
import Button from 'react-bootstrap/Button';
import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../../Contexts/Context';

export default function Searchbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const cidadeRef = useRef();
  const categoriaRef = useRef();
  const { state, setState } = useContext(Context);
  const { cidades, categorias } = state;

  const [Resp] = useState(cidades);
  const [cidadesData, setCidadesData] = useState(cidades);
  const [categoriasData] = useState(categorias);

  const Change = ({ target }) => {
    if (!target.toLowerCase) {
      setCidadesData(Resp);
      return;
    }
    const filterResp = cidadesData.filter(({ nome }) => nome.includes(target.value));
    setCidadesData(filterResp);
  };

  const handleBuscar = () => {
    const filtroSearchBar = {
      categoriaFilter: categoriaRef.current.value,
      cidadeFilter: cidadeRef.current.value,

    };
    setState({ ...state, filtroParametros: filtroSearchBar });
    if (filtroSearchBar.categoriaFilter === '' && filtroSearchBar.cidadeFilter === '') {
      if (location.pathname !== '/buscar') {
        navigate('/buscar/todos');
      }
    } else if (location.pathname !== '/buscar') {
      navigate('/buscar/filtro');
    }
  };
  return (
    <div className="searchBarComponent">
      <div className="d-flex w-100 flex-column flex-lg-row justify-content-center ">
        <div className="form-group has-search m-1 ">
          <span className="bi bi-geo-alt  form-control-feedback" />
          <input
            ref={cidadeRef}
            id="cidadeFormSearchBar"
            type="text"
            list="dataCidade"
            className="form-control"
            placeholder="Onde Vamos?"
            onChange={Change}
          />
          <datalist id="dataCidade">
            {cidadesData.map((respost, index) => (
              <option value={respost.nomeCidade} key={index}>
                {respost.nomeCidade}
              </option>
            ))}
          </datalist>
        </div>

        <div className="form-group has-search m-1 ">
          <span className="bi bi-house  form-control-feedback" />
          <input
            ref={categoriaRef}
            id="categoriaFormSearchBar"
            type="text"
            list="datacategoria"
            className="form-control"
            placeholder="Categoria"
            onChange={Change}
          />
          <datalist id="datacategoria">
            {categoriasData.map((categoriasRespose, index) => (
              <option value={categoriasRespose.descricaoCategoria} key={index}>
                {categoriasRespose.descricaoCategoria}
              </option>
            ))}
          </datalist>
        </div>

        <div className="calendar-input form-group has-search m-1">
          <span className="bi bi-calendar4-week form-control-feedback" />
          <input
            id="checkInFormSearchBar"
            type="text"
            onChange={() => null}
            onFocus={(e) => { (e.target.type = 'date'); }}
            onBlur={(e) => { (e.target.type = 'date'); }}
            className="form-control"
            placeholder="Check in"
          />
        </div>

        <div className="calendar-input form-group has-search m-1">
          <span className="bi bi-calendar-week-fill form-control-feedback" />
          <input
            id="checkOutFormSearchBar"
            type="text"
            onChange={() => null}
            onFocus={(e) => { (e.target.type = 'date'); }}
            onBlur={(e) => { (e.target.type = 'date'); }}
            className="form-control"
            placeholder="Check out"
          />
        </div>

        <Button className="m-1" id="buscarButtonSearchBar" onClick={() => handleBuscar()}>Buscar</Button>
      </div>
    </div>
  );
}
