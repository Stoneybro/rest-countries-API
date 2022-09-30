    import Navbar from "../components/Navbar"
    import {AiOutlineSearch} from 'react-icons/ai'
    import { useFetch } from "../context/Fetchprovider"
    import { Link,Outlet } from "react-router-dom"
    export default function Country(params) {
        const newdata=useFetch()
        return(
            <>
            <Navbar />
            <div className="country">
            <div className="country-inputs">
                <div className="search">
                <input
             type="text" 
              id='countries'
              placeholder="Search a country..."
             />
             <AiOutlineSearch className="searchicon" size={30} color='hsl(0, 0%, 52%)' />
                </div>
                <div className="filter-region">
                <select name="regions">
                    <option value="">filter by region</option>
                    <option value="">asia</option>
                    <option value="">asia</option>
                    <option value="">asia</option>
                </select>
                </div>
            </div>
            </div>
                <div className="countries">
                  {  newdata?.map((data)=>{
                        return(
                            <Link to={`/${data.name}`} className='country-links' key={data.name}>
                            <div className="countries-container" >
                            <div className="country-image"><img src='https://flagcdn.com/er.svg' alt="erasmus" /></div>
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
                <Outlet />
            </>
        )
     }