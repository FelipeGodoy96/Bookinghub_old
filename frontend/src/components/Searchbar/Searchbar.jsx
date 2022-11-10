import Button from "react-bootstrap/Button";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Searchbar.css";

export default function Searchbar() {
  const ref = useRef();

  const [Resp, Repos] = useState([])
  const [resp, repos] = useState([])

  useEffect(() => {
    const FetchResp = async () => {
      try{
        const api = await fetch('http://54.183.252.14:8080/cidades')
        const data = await api.json();
        console.log(data);
        Repos(data);
        repos(data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchResp();
  }, []);
  const Change = ({ target }) => {
    if(!target.value) {
      repos(Resp)
      return
    }
    const filterResp = resp.filter(({nome}) => nome.includes(target.value))
    repos(filterResp);
  }
    return (
    <>
      <div className="searchBarComponent">
        <div className="d-flex w-100 flex-column flex-lg-row justify-content-center ">
          <div className="form-group has-search m-1 ">
            <span className="bi bi-geo-alt  form-control-feedback"></span>

            <input
              type="text"
              list="data"
              className="form-control"
              placeholder="Onde Vamos?"
              onChange={Change}
            />
            <datalist id="data">
              {resp.map((respost) =>
                <option key={respost.id} value={respost.nome} />
              )}
            </datalist>        

          </div>

          <div className="calendar-input form-group has-search m-1">
            <span className="bi bi-calendar4-week form-control-feedback"></span>
            <input
              type="text"
              onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "date")}
              className="form-control"
              placeholder="Check in"
            />
          </div>

          <div className="calendar-input form-group has-search m-1">
            <span className="bi bi-calendar-week-fill form-control-feedback"></span>
            <input
              ref={ref}
              type="text"
              onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "date")}
              className="form-control"
              placeholder="Check out"
            />
          </div>

          <Button className="m-1">Buscar</Button>
        </div>
      </div>
    </>
  );
}
