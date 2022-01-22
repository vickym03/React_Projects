import React, { useState } from "react";
import Results from "./Results";

function AgeCal() {
  const [data, setData] = useState({
    date: '',
    birthday: '',
    showResults: false,
  });
  const CalculateAge = () => {
    setData({ birthday: data.date, showResults: true });
  };
  const changeHandler = (e) => {
    setData({ date: e.target.value });
  };
  return (
    <div className="container m-5">
      <div align="center " className="Calculator col-lg-8">
        <div className="card m-5">
          <div className="card-header text-white bg-success"><b>  Calculator Your Age </b></div>
          <div className="card-body">
            <h6>Select Your Birthday</h6>
            <div className="d-grid col-10">
              <input
                type="date"
                className="textfield"
                onChange={changeHandler}
              />
            </div>
            <br />
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-warning"
                onClick={CalculateAge}
              >
               <b>  Your Age is below</b>
              </button>
            </div>
            <div align="left">
              {data.showResults ? <Results date={data.birthday} /> : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgeCal;