import { createContext,useState,useEffect, useContext } from "react";

const fetchContext=createContext()

export const FetchProvider=({children})=>{
    const [category,setCategory]=useState('all')
    const [spec,setSpec]=useState('')



    useEffect(()=>{
                setCategory('name')
                if (spec) {
                   setCategory('all') 
                }
            
    },[spec])

    const [data,setData]=useState()
    useEffect( ()=>{
      
        const fetchdata= async ()=>{
            try {
                const response= await fetch(`https://restcountries.com/v2/${category}/${spec}`)
                const fetchedData=await response.json()
                setData(fetchedData)
             } catch (error) {
                 error.response
             }
        }
      fetchdata()
    },[spec])

return(
    <fetchContext.Provider value={
        {data,spec,setSpec,setCategory,category,
}    }>
        {children}
    </fetchContext.Provider>
)

}
export function useFetch(params) {
    return useContext(fetchContext)
}

 