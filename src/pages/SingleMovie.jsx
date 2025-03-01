import axios from "../api/axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
export default function SingleMovie(){
    const {id}= useParams()
    const fetchSingleMovie=()=>{
        axios.get(`/movie/${id}`).then((res)=>{
            console.log(res.data)
        })
    }
    useEffect(fetchSingleMovie, [id])
    
    
    return (<h1>QUA VERRANNO INSERITI I SINGOLI FILM</h1>)
}