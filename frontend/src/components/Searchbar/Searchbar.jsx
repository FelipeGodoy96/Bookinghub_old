import Button from 'react-bootstrap/Button';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Contexts/Context';

export default function Searchbar() {
  const ref = useRef();

  const { state } = useContext(Context);
  const { cidades, categorias } = state;

  const [Resp, Repos] = useState(cidades);
  const [cidadesData, setCidadesData] = useState(cidades);
  const [categoriasData, setCategoriasData] = useState(categorias);
  console.log(categoriasData);

  const Change = ({ target }) => {
    if (!target.toLowerCase) {
      setCidadesData(Resp);
      return;
    }
    const filterResp = cidadesData.filter(({ nome }) => nome.includes(target.value));
    setCidadesData(filterResp);
  };

  return (
    <div className="searchBarComponent">
      <div className="d-flex w-100 flex-column flex-lg-row justify-content-center ">
        <div className="form-group has-search m-1 ">
          <span className="bi bi-geo-alt  form-control-feedback" />
          <input
            type="text"
            list="data"
            className="form-control"
            placeholder="Onde Vamos?"
            onChange={Change}
          />
          <datalist id="data">
            {cidadesData.map((respost) => (
              <option value={respost.nome}>{respost.nome}</option>
            ))}
          </datalist>
        </div>

        <div className="form-group has-search m-1 ">
          <span className="bi bi-house  form-control-feedback" />
          <input
            type="text"
            list="datacategoria"
            className="form-control"
            placeholder="Categoria"
            onChange={Change}
          />
          <datalist id="datacategoria">
            {categoriasData.map((categoriasRespose) => (
              <option value={categoriasRespose.descricao}>{categoriasRespose.descricao}</option>
            ))}
          </datalist>
        </div>

        <div className="calendar-input form-group has-search m-1">
          <span className="bi bi-calendar4-week form-control-feedback" />
          <input
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
            ref={ref}
            type="text"
            onChange={() => null}
            onFocus={(e) => { (e.target.type = 'date'); }}
            onBlur={(e) => { (e.target.type = 'date'); }}
            className="form-control"
            placeholder="Check out"
          />
        </div>

        <Link to="/"><Button className="m-1">Buscar</Button></Link>
      </div>
    </div>
  );
}
