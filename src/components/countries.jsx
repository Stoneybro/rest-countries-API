import { Link } from "react-router-dom"
import { useFetch } from "../context/Fetchprovider"
import {TailSpin} from 'react-loader-spinner'
export default function Countries() {
    const {data,category}=useFetch()

    console.log(data);
    if (!data) {
       return <div className="tailspin"><TailSpin  /> </div>
    }
    if (data.message==='Page Not Found') {
        return <div className="tailspin">The country doesnt exist </div>
    }

    return(
        <div className="countries">
        {  data?.map((data)=>{
              return(
                  <Link to={`/${data.name}`} className='country-links' key={data.name}>
                  <div className="countries-container" >
                  <div className="country-image"><img src={data.flag} alt="erasmus" /></div>
                  <div className="countries-info">
                  <div className="country-name">{data.name}</div>
                  <div className="country-population"><span>Population: </span>{data.population}</div>
                  <div className="country-region"><span>Region: </span>{data.region}</div>
                  <div className="country-capital"><span>Capital</span>: {data.capital}</div>
                  </div>
                  </div>
                  </Link>
              )
        })
        
        }
      </div>
    )
}