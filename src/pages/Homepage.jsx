import axios from '../api/axios';
import { useEffect } from 'react';
export default function HomePage(){
    const fetchMovie=()=>{
        axios.get("/movie").then((res)=>{
            console.log(res.data)
        })
    }
    useEffect(fetchMovie, [])
    return(
        <h1>QUESTA È LA HOME</h1>
    )
}