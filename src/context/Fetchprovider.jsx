import { createContext,useState,useEffect, useContext } from "react";

const fetchContext=createContext()
const getStorageTheme = () => {
    let theme = 'light';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
export const FetchProvider=({children})=>{
    const [category,setCategory]=useState('all')
    const [spec,setSpec]=useState('')
    const [theme,setTheme]=useState(getStorageTheme())
    function toggleTheme() {
        if (theme==='light') {
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      }, [theme]);

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
        {data,spec,setSpec,setCategory,category,toggleTheme,theme
}    }>
        {children}
    </fetchContext.Provider>
)

}
export function useFetch(params) {
    return useContext(fetchContext)
}

 