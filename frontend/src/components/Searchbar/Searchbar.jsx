import Button from "react-bootstrap/Button";

import "./Searchbar.css";

export default function Searchbar() {
  return (
    <>
      <div className="d-flex w-75 flex-column flex-lg-row justify-content-center">
        <div className="form-group has-search m-1 ">
          <span className="bi bi-geo-alt  form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Onde Vamos?"
          />
        </div>
        <div className="form-group has-search m-1">
          <span className="bi bi-calendar4-week form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Check in" />
        </div>
        <div className="form-group has-search m-1">
          <span className="bi bi-calendar-week-fill form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Check out" />
        </div>
        <Button className="m-1">Buscar</Button>
      </div>
    </>
  );
}
