import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import "../../styles/Searchbar.css";

export default function Searchbar() {
  const ref = useRef();
  return (
    <>
      <div className="searchBarComponent">
        <div className="d-flex w-100 flex-column flex-lg-row justify-content-center ">
          <div className="form-group has-search m-1 ">
            <span className="bi bi-geo-alt  form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Onde Vamos?"
            />
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
