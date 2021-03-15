import React, { useEffect, useState } from "react";
import { APP_ID, BASE_URL } from "./constant";
import Userpost from "./Userpost";

const Userposts = (props) => {
    const [Data, setData] = useState(null);
  useEffect(() => {
    fetch(`${BASE_URL}/user/${props.match.params.id}/post?limit=10`, {
      headers: { "app-id": APP_ID },
    })
      .then((data) => data.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
    return (
        <>
         <div className="container">
            <div className="row mt-5">
                {Data && Data.map((item)=>(
                    <Userpost key={item.text} Data={item}/>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default Userposts
