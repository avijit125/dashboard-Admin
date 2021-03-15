import React from 'react'
import {Link} from "react-router-dom"

const Post = ({Data}) => {
    console.log(Data)
    return (
        <>
        <div className="col-md-4">
      <div class="card m-3">
        <img src={Data.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Data.text} LIKES { Data.likes}</h5>
          <p> {Data.tags} </p>
          <h5 className="text-muted"> {Data.link} </h5>
          <h5 className="text-dark"> {Data.owner.firstName} </h5>
          <Link className="btn btn-outline-secondary" to={`/userpost/${Data.owner.id}`}>GO TO USER POST</Link>
        </div>
      </div>
    </div>
            
        </>
    )
}

export default Post
