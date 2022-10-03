import {BiMoon} from 'react-icons/bi'
import { useFetch } from '../context/Fetchprovider'
export default function Navbar(params) {
    const {toggleTheme,theme}=useFetch()
    return(
        <div className="navbar">
            <h2 className="where">Where in the world?</h2>
            <div className="colorscheme" onClick={toggleTheme}>
                <BiMoon color={theme==='light'?'black':'white'} />
                <span>{theme==='light'?'Dark Mode':'Light Mode'}</span>
            </div>
        </div>
    )
}