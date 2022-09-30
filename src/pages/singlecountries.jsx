import {useParams} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFetch } from '../context/Fetchprovider'
export default function Singlecountries(params) {
    const data =useFetch()
    
    const {name} =useParams()
    

    const singledata=data?.find((data)=>{
        
        data.name===name
    })
   
    return(
        <>
        <Navbar />

        single country page {name}
        </>
    )
}