import Button from 'react-bootstrap/Button';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Contexts/Context';

export default function Searchbar() {
  const ref = useRef();

  const { state } = useContext(Context);
  const { cidades } = state;

  const [Resp, Repos] = useState(cidades);
  const [resp, repos] = useState(cidades);

  const Change = ({ target }) => {
    if (!target.toLowerCase) {
      repos(Resp);
      return;
    }
    const filterResp = resp.filter(({ nome }) => nome.includes(target.value));
    repos(filterResp);
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
            {resp.map((respost) => (
              <Link className="link" key={respost.id} to={`/cidade/${respost.nome}`}>
                <option value={respost.nome}>{respost.nome}</option>
              </Link>
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
