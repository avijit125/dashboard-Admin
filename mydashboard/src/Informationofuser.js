import React from "react";
import {Link} from "react-router-dom"

const Informationofuser = ({Data}) => {
  return (
    <div className="col-md-4">
      <div class="card m-3">
        <img src={Data.picture} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Data.firstName} { Data.lastName}</h5>
          <Link className="btn btn-outline-secondary" to={`/info/${Data.id}`}>learn info</Link>
        </div>
      </div>
    </div>
  );
};

export default Informationofuser;
