import React ,{useEffect ,useState} from 'react'
import Informationofuser from './Informationofuser'
//import axios from 'axios';
import {APP_ID,BASE_URL} from "./constant"



function Home() {
    const [Data, setData] = useState(null);
    useEffect(() => {
        
        fetch(`${BASE_URL}/user?limit=10`, { headers: { 'app-id': APP_ID } })
            .then((data ) => data.json())
            .then((data)=> setData(data.data))
            .catch((err)=>console.log(err))

    }, [])

    return (
        <>
        <div className="container">
            <div className="row mt-5">
                {Data && Data.map((item)=>(
                    <Informationofuser key={item.id} Data={item}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default Home
