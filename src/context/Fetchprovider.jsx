import { createContext,useState,useEffect, useContext } from "react";

const fetchContext=createContext()

export const FetchProvider=({children})=>{

    const [data,setData]=useState()
    useEffect( ()=>{
        const fetchdata= async ()=>{
            try {
                const response= await fetch('https://restcountries.com/v2/all')
                const fetchedData=await response.json()
                setData(fetchedData)
             } catch (error) {
                 error.response
             }
        }
      fetchdata()
    },[])
return(
    <fetchContext.Provider value={data}>
        {children}
    </fetchContext.Provider>
)

}
export function useFetch(params) {
    return useContext(fetchContext)
}

 