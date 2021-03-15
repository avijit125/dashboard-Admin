import React ,{useEffect ,useState} from 'react'
import {APP_ID,BASE_URL} from "./constant"
import Post from './Post'

const Posts = () => {
    const [Data, setData] = useState(null);
    useEffect(() => {
        
        fetch(`${BASE_URL}/post?limit=10`, { headers: { 'app-id': APP_ID } })
            .then((data ) => data.json())
            .then((data)=> setData(data.data))
            .catch((err)=>console.log(err))

    }, [])
    return (
        <>
            <div className="container">
            <div className="row mt-5">
                {Data && Data.map((item)=>(
                    <Post key={item.text} Data={item}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default Posts
