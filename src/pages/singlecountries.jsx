import {useParams} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useFetch } from '../context/Fetchprovider'
export default function Singlecountries(params) {
    const data =useFetch()
    
    const {Country} =useParams()

    const singledata=data?.find((data)=>{
        
       return data.name===Country
    })
    const lang=singledata.languages.map((lang)=>{
        return lang.name
    })
    console.log(singledata);
       

    return(
        <>
        <Navbar />

       <div className="single-country">
        <button className="back">Back</button>

        <div className="single-country-info">
            <div className="single-country-flag">
                <img src={singledata.flag} alt={`flag of ${singledata.name}`} />
            </div>
            <div className="single-country-info-text">
            <h1 className="s-country-name">{singledata.name}</h1>
                <div className="sc-column">
                    
                <div className="sc-column-1">
                
                <div className="s-country-N-name"><span>Native name:</span> {singledata.nativeName}</div>
                <div className="s-country-population"><span>Population:</span> {singledata.population}</div>
                <div className="s-country-region"><span>Region:</span> {singledata.region}</div>
                <div className="s-country-subregion"><span>Sub-Region: </span>{singledata.subregion}</div>
                <div className="s-country-capital"><span>Capital: </span>{singledata.capital}</div>
                </div>
                <div className="sc-column-2">
                <div className="s-country-TLD"><span>Top-Level-Domain: </span>{singledata.topLevelDomain[0]}</div>
                <div className="s-country-currency"><span>Currency: </span>{singledata.currencies[0].name}</div>
                <div className="s-country-languages"><span>Languages: </span>{lang.join()}</div>
                </div>
                </div>
                <div className="sc-border-country"><span>Border countries: </span>
                    <div>
                   { singledata.borders.map((borders)=>{
                    return <div className="back">{borders}</div>
                   })}</div>
              </div>

            </div>

        </div>
       </div>
        </>
    )
}