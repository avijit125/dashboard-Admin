import React, { useEffect, useState } from "react";
import { APP_ID, BASE_URL } from "./constant";
import {Link} from "react-router-dom"

const Userinfo = (props) => {
  const [Data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BASE_URL}/user/${props.match.params.id}`, {
      headers: { "app-id": APP_ID },
    })
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <>
     {Data ? ( <div class=" container card mt-5 " style={{maxWidth:"540px"}}>
        <div class="row">
          <div class="col-md-7">
            <img className="card-img" src={Data.picture} alt="..." />
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">Name {Data.title} {Data.firstName} {Data.lastName} </h5>
              <p class="card-text">
                DOB: {Data.dateOfBirth} 
              </p>
              <p class="card-text">
                SEX:  {Data.gender} 
              </p>
              
              <p class="card-text">
                <small class="text-muted">PNo.  {Data.phone} </small>
              </p>
              <Link  className="btn btn-outline-secondary mb-3" to="/">GO TO ADMIN PANAL</Link>
              <Link className="btn btn-outline-secondary" to={`/userpost/${Data.id}`}>GO TO USER POST</Link>
            </div>
          </div>
        </div>
      </div>):(<h1>loading...</h1>)} 
    </>
  );
};

export default Userinfo;
