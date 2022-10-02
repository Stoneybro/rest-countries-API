    import Navbar from "../components/Navbar"
    import Countries from "../components/countries"
    import {AiOutlineSearch} from 'react-icons/ai'
    import { useFetch } from "../context/Fetchprovider"
    import { Link,Outlet } from "react-router-dom"
import React, { useState } from "react"
    export default function Country(params) {
        const {data,spec,setSpec,setCategory}=useFetch()
        function handlechange(e) {
            const {value}=e.target
            setSpec(value)
           setCategory('region')
        }


        return(
            <div>
            <Navbar />
            <div className="country">
            <div className="country-inputs">
                <div className="search">
                <input
             type="text" 
              id='countries'
              placeholder="Search a country..."
              onChange={(e)=>{setSpec(e.target.value);}}
              value={spec}
             />
             <AiOutlineSearch className="searchicon" size={30} color='hsl(0, 0%, 52%)' />
                </div>
           
             
                 <div className="filter-region">
    <details className="custom-select">
                    <summary className="radios">
                    <input type="radio" name="item" id="default" title="Filter by Region" checked/>
            <input type="radio" name="item" id="item1" title="Africa" value='Africa' onChange={handlechange}/>
            <input type="radio" name="item" id="item2" title="Americas" value='Americas' onChange={handlechange}/>
            <input type="radio" name="item" id="item3" title="Asia" value='Asia' onChange={handlechange}/>
            <input type="radio" name="item" id="item4" title="Europe" value='Europe' onChange={handlechange}/>
            <input type="radio" name="item" id="item5" title="Oceania" value='Oceania' onChange={handlechange}/>
                    </summary>
                    <ul className="list">
    <li>
      <label htmlFor="item1">
        Africa
        <span></span>
      </label>
    </li>
    <li>
      <label htmlFor="item2">Americas</label>
    </li>
    <li>
      <label htmlFor="item3">Asia</label>
    </li>
    <li>
      <label htmlFor="item4">Europe</label>
    </li>
    <li>
      <label htmlFor="item5">Oceania</label>
    </li>
  </ul>
    </details>
                   
</div>
                

            </div>
            </div>
             <Countries />
                <Outlet />
            </div>
        )
     }